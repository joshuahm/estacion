import Aladino from './src/index.js';
import lerp from './assets/lerp.js';

const flkty = new Flickity(document.querySelector('.carousel'), {
  freeScroll: true,
  dragThreshold: 0,
  freeScrollFriction: 0.07,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
});

const aladino = new Aladino({
  density: 20,
});

document.body.appendChild(aladino.canvas);

const material = aladino.material({
  vertex: /* glsl */ `
    attribute vec2 position;
    attribute vec2 uv;
    uniform mat4 projection;
    //uniform float time;
    uniform float speed;
    uniform float speed2;
    varying vec2 vUv;
    varying float vCenter;
    float parabola( float x, float k ) {
      return pow( 4.0*x*(1.0-x), k );
    }
    mat4 rotationMatrix(vec3 axis, float angle) {
      axis = normalize(axis);
      float s = sin(angle);
      float c = cos(angle);
      float oc = 1.0 - c;
      return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0,
      oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0,
      0.0, 0.0, 0.0, 1.0);
    }
    void main() {
      vUv = uv;
      vec4 pos = vec4(position, 0.0, 1.0);
      float spee = speed * 40.0;
      // pos.x += parabola(uv.y, 1.0) * spee;
      vec4 pp = projection * vec4(position, 0.0, 1.0);
      float yy = ((pp / pp.w).x + 1.0) / 2.0;
      yy = clamp(yy, 0.0, 1.0);
      vCenter = yy;
      float p = smoothstep(.0, 1.0, yy);

      vec4 rotated = rotationMatrix(vec3(0.4, 0.1, 0.7), p) * pos;
      pos = mix(pos, rotated, spee);
      // pos.z = parabola(, 2.4) * speed2 * 160.0;
      // pos.z = clamp(pos.z, -6.0, 6.0);
      gl_Position = projection * pos;
    }
  `,
  fragment: /* glsl */ `
    precision highp float;
    uniform vec2 size;
    uniform vec2 sizeImage;
    uniform sampler2D image;
    varying vec2 vUv;
    varying float vCenter;
    vec4 coverTexture(sampler2D tex, vec2 imgSize, vec2 ouv) {
      vec2 s = size;
      vec2 i = imgSize;
      float rs = s.x / s.y;
      float ri = i.x / i.y;
      vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
      vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
      vec2 uv = ouv * s / new + offset;

      return texture2D(tex, uv);
    }
    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }
    void main() {
      vec4 color = coverTexture(image, sizeImage, vUv);
      vec3 duotone = mix(
        vec3(0.149,0.141,0.912),
        vec3(1.000,0.269,0.115),
        luma(color.rgb)
      );
      color.rgb = mix(color.rgb, duotone, vCenter);
      gl_FragColor = color;
    }
  `,
  uniforms: {
    speed: 0,
  },
});

const isFF = navigator.userAgent.indexOf('Firefox') > -1;

document.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();

    let y = e.wheelDeltaY || e.deltaY * -1;

    if (isFF) {
      y *= 5;
    }

    flkty.applyForce(y * 0.03);
    flkty.startAnimation();
    flkty.dragEnd();
  },
  { passive: false }
);

const cells = [...document.querySelectorAll('.cell')];
const carpets = [];
cells.forEach((cell) => {
  const carpet = aladino.carpet(cell, {
    material,
    uniforms: {
      image: aladino.texture(cell.querySelector('img').src),
    },
  });

  carpets.push(carpet);
});

// let oldProgress = 0;
let speed = 0;

flkty.on('scroll', (progress) => {
  // The way flickity works doesn't allow an easy use of the position,
  // So it can be optimised, as here we're recalculating dom boundingbox each time
  carpets.forEach((carpet) => {
    carpet.resize();
  });

  speed = flkty.velocity * 0.00025;

  // speed = oldProgress - progress;
  // oldProgress = progress;
});

const update = () => {
  requestAnimationFrame(update);

  // aladino.post.uniforms.speed = lerp(aladino.post.uniforms.speed, speed, .04);
  material.uniforms.speed = lerp(material.uniforms.speed, speed, 0.04);
};

update();
