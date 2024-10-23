/* eslint-disable jsx-a11y/alt-text */
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useHistory } from 'react-router-dom';

export default function Contacto() {
  const parallax = useRef();
  const history = useHistory();
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
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer
            offset={0}
            factor={3}
            speed={0}
            style={{ backgroundColor: '#444' }}
          />
          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#888' }}
          />
          <ParallaxLayer
            offset={5}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#72efdd' }}
          />

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
                  'url(assets/img-drive/dark.jpg) 100% 0 / cover no-repeat',
                    // 'url(' +
                    // require('assets/img-drive/dark.jpg').default +
                    // ') 100% 0 / cover no-repeat',
                  WebkitTextStroke: '0px',
                  WebkitTextFillColor: 'black',
                  letterSpacing: '-7px',
                  lineHeight: '200px',
                }}
              >
                Documental
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="item-card">
              <div
                className="clip-text"
                onClick={() => history.push('/enelmurmullodelviento')}
                style={{
                  cursor: 'pointer',
                  backgroundImage:
                    'url(assets/img-drive/murmullodelviento1-sm.png)',
                    // 'url(' +
                    // require('assets/img-drive/murmullodelviento1-sm.png')
                    //   .default +
                    // ')',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textAlign: 'right',
                  lineHeight: '130px',
                  WebkitTextStroke: '2px',
                }}
              >
                En el murmullo del viento
                <div
                  className="clip-text-after"
                  style={{
                    backgroundColor: '#ffd166',
                    left: '3em',
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
