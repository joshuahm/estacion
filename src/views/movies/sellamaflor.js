import React, { useRef } from 'react';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import { Rerousel } from 'rerousel';
import styled from 'styled-components';
import ReactIntense from 'react-intense'; /* eslint-disable jsx-a11y/alt-text */
// core components
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Carousel() {
  const ref = useRef(null);

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    height: 500px;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;

    @media (max-width: 1150px) {
      width: 100%;
      margin: 0rem;
    }
  `;

  return (
    <Rerousel itemRef={ref} interval="3000">
      <Item ref={ref}>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor1.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor2.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor5.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor6.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor7.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor8.png'}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/sellamaflor9.png'}
        ></ReactIntense>
      </Item>
    </Rerousel>
  );
}

export default function SeLlamaFlor() {
  const parallax = useRef();

  React.useEffect(() => {
    document.body.classList.toggle('landing-page');
    document.body.classList.toggle('dias');
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle('landing-page');
      document.body.classList.toggle('dias');
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        <Parallax ref={parallax} pages={12}>
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#EF7674' }}
          />
          <ParallaxLayer
            offset={1}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#726E97' }}
          />

          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#7698B3' }}
          />
          <ParallaxLayer
            offset={5}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#673C4F' }}
          />
          <ParallaxLayer
            offset={7}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#83B5D1' }}
          />
          <ParallaxLayer
            offset={9}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#EC5766' }}
          />

          <ParallaxLayer offset={0} speed={0.1}>
            <div className="wrapper">
              <div className="page-header">
                <div
                  className="content-center"
                  onClick={() => {
                    console.log('content-center');
                    parallax.current.scrollTo(11.2);
                    setTimeout(() => {
                      document.getElementById('trailer').src += '&autoplay=1';
                    }, 1500);
                  }}
                >
                  <img
                    className="img-custom"
                    src={'assets/img-drive/sellamaflor1.png'}
                    alt="Se llama flor"
                  ></img>
                  <h1 className="fixed-top text-center film-title">
                    Se llama flor <br />
                    <i className={'fas mt-2 fa-play'} />
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(1);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
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
            <section className="section section-lg" style={{ width: '100%' }}>
              <Container>
                <Row className="justify-content-center">
                  <Col>
                    <h1 className="text-center mb-5">Ficha Técnica</h1>
                    <Row className="">
                      <Col className="text-white h4 text-contenido align-self-center">
                        <div className="ml-3">
                          <b>Título en español:</b> Se llama flor
                        </div>
                        <div className="ml-3">
                          <b>Título en inglés:</b> Her name is flor
                        </div>
                        <div className="ml-3">
                          <b>Soporte final:</b> DCP
                        </div>
                        <div className="ml-3">
                          <b>Formato:</b> 4k.
                        </div>
                        <div className="ml-3">
                          <b>Ratio aspect:</b> 2:35
                        </div>
                        <div className="ml-3">
                          <b>Duración:</b> 10 min
                        </div>
                      </Col>
                      <Col className="d-none ml-4 d-md-block d-lg-flex d-xl-flex align-items-center">
                        <div
                          className="d-block img-fluid rounded"
                          style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '5rem',
                            minHeight: '300px',
                            minWidth: '700px',
                            backgroundImage:
                              'url(assets/img-drive/sellamaflor2.png)',
                          }}
                        ></div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(3);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
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
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center mb-5">Sinopsis</h1>
                    <Row>
                      <Col className="text-white h4 ml-3">
                        <i className="ml-3">
                          Tere es una mujer joven, madre soltera. Que tiene que
                          recorrer un largo camino todos los días para vender
                          servilletas bordadas en el mercado del pueblo. Viaja
                          con su hija Flor quien pierde uno de sus zapatos
                          nuevos. Tere se ve forzada a dejarla un momento sola.
                          Hecho que cambia la vida de Tere por completo.
                        </i>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(5);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 5, end: 6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <section className="section section-lg" style={{ width: '100%' }}>
              <Container>
                <h1 className="text-center mb-4">Creditos</h1>
                <Row className="justify-content-center pt-4 contenido-row">
                  <Col className="text-white h4 text-contenido-chico">
                    <div className="ml-3">
                      <b>Dirección y guion:</b> Viridiana Pérez Ramírez
                    </div>
                    <div className="ml-3">
                      <b>Producción:</b> Nina Wara Carrasco
                    </div>
                    <div className="ml-3">
                      <b>Fotografía:</b> Tonatiuh Martínez (AMC)
                    </div>
                    <div className="ml-3">
                      <b>Diseño de producción:</b> Sabrina Martino
                    </div>
                    <div className="ml-3">
                      <b>Edición:</b> Jorge Malpica
                    </div>
                    <div className="ml-3">
                      <b>Post producción:</b> Ricardo Cortés
                    </div>
                    <div className="ml-3">
                      <b>Diseño sonoro:</b> Estudio 24/48
                    </div>
                    <div className="ml-3">
                      <b>Música:</b> Ana Tijoux
                    </div>
                  </Col>
                  <Col className="text-white h4 text-contenido-chico">
                    <div className="ml-3">
                      <b>Reparto:</b>
                    </div>
                    <div className="ml-5">
                      <b>Teresa:</b> Dalia Xiuhcoatl
                    </div>
                    <div className="ml-5">
                      <b>Flor:</b> Keely Romero
                    </div>
                    <div className="ml-5">
                      <b>Citlali:</b> América Gabriel
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(7);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 7, end: 8 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center mb-5">Festivales</h1>
                    <Row>
                      <Col className="text-white h4 text-contenido-chico">
                        <div className="ml-3">
                          Selección de México Short Film festival
                        </div>
                        <div className="ml-3">
                          Selección del Festival Internacional de Morelia
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(9);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 9, end: 10 }}>
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center pt-5">Stills</h1>
                  </Col>
                </Row>
              </Container>
              <Carousel></Carousel>
            </section>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{
                zIndex: 2000,
                paddingLeft: '4rem',
                paddingRight: '4rem',
                paddingTop: '3rem',
                paddingBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                parallax.current.scrollTo(11);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={11}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <section className="section section-lg" style={{ width: '100%' }}>
              <Container>
                <Row className="justify-content-center mt-5">
                  <h1 className="text-center pt-2">Trailer</h1>
                </Row>
              </Container>
              <div
                className="text-center"
                style={{
                  maxWidth: '1080px',
                  margin: 'auto',
                }}
              >
                <div
                  className="video-responsive"
                  style={{
                    width: '100%',
                    position: 'relative',
                    // marginLeft: '2%',
                    paddingBottom: '56.25%',
                  }}
                >
                  <iframe
                    id="trailer"
                    src="https://player.vimeo.com/video/670287486?h=746bca1417&byline=0&portrait=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Se llama flor Trailer"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                </div>
              </div>
            </section>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
