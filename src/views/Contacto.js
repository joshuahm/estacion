/* eslint-disable jsx-a11y/alt-text */
// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Col, Container, Row } from 'reactstrap';

// const data1 = generate(
//   new Settings(1800, 300, 10, 50, 0, ['blue', 'darkblue', 'blue'])
// );

export default function Contacto() {
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
        <Parallax ref={parallax} pages={1}>
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#56cfe1' }}
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
            <div className="item-card" style={{ flexDirection: 'column' }}>
              <div
                className="clip-text clip-text--no-textzone"
                style={{
                  background:
                    'url(assets/img-drive/leaves1.jpeg) 0 0 / cover no-repeat',
                    // 'url(' +
                    // require('assets/img-drive/leaves1.jpeg').default +
                    // ') 0 0 / cover no-repeat',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextStroke: '2px white',
                  textStroke: '2px white',
                  wordWrap: 'break-word',
                }}
              >
                Contacto
                <Container
                  style={{
                    fontSize: 'initial',
                    letterSpacing: 'initial',
                    fontWeight: 'initial',
                    WebkitTextStroke: 'initial',
                    color: 'initial',
                    WebkitTextFillColor: 'initial',
                  }}
                  className="contacto"
                >
                  <Row>
                    <Col
                      className="h3 mt-5 py-3 text-white"
                      style={{
                        backgroundColor: 'rgba(86, 207, 225, 0.7)',
                        fontWeight: '500',
                      }}
                    >
                      <div className="mx-3">Estación Marte Films</div>
                      <div className="mx-3">
                        Av. Progreso 55, Col. Escandón, 11800
                      </div>
                      <div className="mx-3">Ciudad de México, México</div>
                      <div className="mx-3">
                        <a href="mailto:contacto@estacionmartefilms.com">
                          contacto@estacionmartefilms.com
                        </a>
                      </div>
                      <div className="mx-3">
                        <a href="https://wa.me/+525527735676">
                          https://wa.me/+525527735676
                        </a>
                      </div>
                      <div className="mx-3">
                        <a href="https://wa.me/+525543473992">
                          https://wa.me/+525543473992
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
