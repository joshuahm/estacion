/* eslint-disable jsx-a11y/alt-text */
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// const data1 = generate(
//   new Settings(1800, 300, 10, 50, 0, ['blue', 'darkblue', 'blue'])
// );

export default function Publicidad() {
  const parallax = useRef();
  return (
    <>
      <IndexNavbar />
      <div
        className="text-white u-ver-bottom u-content-space"
        style={{ zIndex: 2000 }}
      >
        <span className="fa fa-angle-down d-block"></span>
      </div>
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        <Parallax ref={parallax} pages={5}>
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#7C98B3' }}
          />
          <ParallaxLayer
            offset={1}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#637081' }}
          />
          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#536B78' }}
          />
          {/* <ParallaxLayer offset={0.99} speed={1} style={{ opacity: 0.6 }}>
            <div>
              <InlineSVG src={data1} />
            </div>
          </ParallaxLayer> */}

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
            }}
          >
            <div className="item-card">
              <div
                className="clip-text clip-text-smaller clip-text--no-textzone"
                style={{
                  background:
                    'url(assets/img-drive/waves.jpg) 0 0 / cover no-repeat',
                    // 'url(' +
                    // require('assets/img-drive/waves.jpg').default +
                    // ') 0 0 / cover no-repeat',
                  WebkitTextStroke: '0px',
                  WebkitTextFillColor: 'linen',
                  letterSpacing: '-8px',
                  wordWrap: 'break-word',
                  lineHeight: '140px',
                }}
              >
                Publicidad
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div className="item-card">
              <div
                className="clip-text"
                style={{
                  backgroundImage:
                    'url(assets/img-drive/still5.png)',
                    // 'url(' +
                    // require('assets/img-drive/still5.png').default +
                    // ')',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Goethe Institute
                <div
                  className="clip-text-after"
                  style={{
                    backgroundColor: '#ffd166',
                  }}
                />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 3, end: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div className="item-card">
              <div
                className="clip-text"
                style={{
                  backgroundImage:
                    'url(assets/img-drive/murmullodelviento1-sm.png)',
                    // 'url(' +
                    // require('assets/img-drive/murmullodelviento1-sm.png')
                    //   .default +
                    // ') ',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  lineHeight: '200px',
                }}
              >
                Parteras
                <div
                  className="clip-text-after"
                  style={{
                    backgroundColor: '#ef476f',
                  }}
                />
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
