/* eslint-disable jsx-a11y/alt-text */
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useHistory } from 'react-router-dom';

export default function Cine() {
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
      <div style={{ width: '100%', height: '100%', background: '#444' }}>
        <Parallax ref={parallax} pages={5}>
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#07beb8' }}
          />
          <ParallaxLayer
            offset={1}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#3DCCC7' }}
          />
          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#68D8D6' }}
          />
          <ParallaxLayer
            offset={5}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#9CEAEF' }}
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
                className="clip-text clip-text--no-textzone"
                style={{
                  background:
                    'url(assets/img-drive/paintred.jpg) 0 0 / cover no-repeat',
                    // 'url(' +
                    // require('assets/img-drive/paintred.jpg').default +
                    // ') 0 0 / cover no-repeat',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextStroke: '2px white',
                  lineHeight: '200px',
                }}
              >
                Cine
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
                onClick={() => history.push('/diasDeInvierno')}
                style={{
                  cursor: 'pointer',
                  backgroundImage:
                    'url(assets/img-drive/still7.png)',
                    // 'url(' +
                    // require('assets/img-drive/still7.png').default +
                    // ')',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  lineHeight: '120px',
                  textAlign: 'right',
                  WebkitTextStrokeWidth: '2px',
                }}
              >
                Dias de Invierno
                <div
                  className="clip-text-after"
                  style={{
                    backgroundColor: '#BB0A21B2',
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
            }}
          >
            <div className="item-card">
              <div
                className="clip-text"
                onClick={() => history.push('/sellamaflor')}
                style={{
                  cursor: 'pointer',
                  backgroundImage:
                    'url(assets/img-drive/sellamaflor4.png)',
                    // 'url(' +
                    // require('assets/img-drive/sellamaflor4.png').default +
                    // ')',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textAlign: 'right',
                }}
              >
                Se llama flor
                <div
                  className="clip-text-after"
                  style={{
                    backgroundColor: '#EFBDEB',
                    left: '2.5em',
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
