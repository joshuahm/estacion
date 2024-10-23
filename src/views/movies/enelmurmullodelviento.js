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
          src={'assets/img-drive/murmullodelviento1.png'}
          // src={require('assets/img-drive/murmullodelviento1.png').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/murmullo_still1.jpg'}
          // src={require('assets/img-drive/murmullo_still1.jpg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/murmullodelviento3.png'}
          // src={require('assets/img-drive/murmullodelviento3.png').default}
        ></ReactIntense>
      </Item>
    </Rerousel>
  );
}

export default function EnElMurmulloDelViento() {
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
      <div style={{ width: '100%', height: '100%', background: '#111' }}>
        <Parallax ref={parallax} pages={12}>
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#735D78' }}
          />
          <ParallaxLayer
            offset={1}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#B392AC' }}
          />

          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#D1B3C4' }}
          />
          <ParallaxLayer
            offset={5}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#E8C2CA' }}
          />
          <ParallaxLayer
            offset={7}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#F7D1CD' }}
          />
          <ParallaxLayer
            offset={9}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#F7D1CD' }}
          />
          <ParallaxLayer
            offset={11}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#F7D1CD' }}
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
                    src={'assets/img-drive/murmullodelviento3.png'}
                    // src={
                    //   require('assets/img-drive/murmullodelviento3.png').default
                    // }
                    alt="En el murmullo del viento"
                  ></img>
                  <h1 className="fixed-top text-center film-title">
                    En el murmullo del viento <br />
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
                      <Col className="text-white h4 text-contenido">
                        <div className="ml-3">
                          <b>Título en español:</b> En El Murmullo Del Viento
                        </div>
                        <div className="ml-3">
                          <b>Título en inglés:</b> In The Whisper Of The Wind
                        </div>
                        <div className="ml-3">
                          <b>Formato De Rodaje:</b> 4K Y Hd
                        </div>
                        <div className="ml-3">
                          <b>Aspecto Ratio:</b> 1.85 (16.9)
                        </div>
                        <div className="ml-3">
                          <b>Sonido:</b> Dolby Digital 5.1
                        </div>
                        <div className="ml-3">
                          <b>Formato De Exhibición:</b> Dcp (Ntsc), Archivo
                          Digital (.Mov), Blu-ray Y Dvd
                        </div>
                        <div className="ml-3">
                          <b>Duración:</b> 60 Minutos.
                        </div>
                        <div className="ml-3">
                          <b>Speed Rate:</b> 23.98 Y 24
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
                            backgroundImage:
                              'url(assets/img-drive/murmullodelviento1-sm.png)',
                              // 'url(' +
                              // require('assets/img-drive/murmullodelviento1-sm.png')
                              //   .default +
                              // ')',
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
              <Container className>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center mb-5">Sinopsis</h1>
                    <Row>
                      <Col className="text-white h4 ml-3">
                        <i className="ml-3">
                          Los relatos del padre de Nina, la realizadora; sobre
                          la música del ritual del Tinku en el norte de Potosí
                          en Bolivia. Son la razón por la que ella regresa 25
                          años después a encontrarse con el lugar idílico de su
                          infancia en medio de las montañas del altiplano. Donde
                          descubre su extranjerismo y una serie de cambios que
                          le hacen darse cuenta que la música es un bálsamo que
                          permite conectarse no sólo con la naturaleza sino con
                          los seres del más allá.
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
                      <b>Dirección y guion:</b> Nina Wara Carrasco
                    </div>
                    <div className="ml-3">
                      <b>Producción:</b> Pedro Lijerón Vargas
                    </div>
                    <div className="ml-3">
                      <b>Guión:</b> Nina Wara Carrasco / Oriana Jimenez Castro
                    </div>
                    <div className="ml-3">
                      <b>Diseño de Fotografía:</b> Jessica Villamil Aguilar -
                      Sergio Bastani
                    </div>
                    <div className="ml-3">
                      <b>Sonido Directo:</b> Gonzalo Quintana
                    </div>
                    <div className="ml-3">
                      <b>Investigación:</b> Ana María Gómez
                    </div>
                    <div className="ml-3">
                      <b>Post producción:</b> Marco Hernández Calvo
                    </div>
                    <div className="ml-3">
                      <b>Montaje:</b> Omar Guzmán
                    </div>
                    <div className="ml-3">
                      <b>Diseñador Sonoro:</b> José Miguel Enríquez Rivaud
                    </div>
                    <div className="ml-3">
                      <b>Corrección De Color:</b> Lisa Tillinger
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
                          Mención honorífica en Amazonia Doc film festival
                        </div>
                        <div className="ml-3">
                          Mencionó honorífica en Arica Nativa
                        </div>
                        <div className="ml-3">
                          Premio al mejor guión sonoro en la II Bienal do Cinema
                          Sonoro Brazil
                        </div>
                        <div className="ml-3">
                          Premio del público en Festival FINCA
                        </div>
                        <div className="ml-3">Selección de FiFEQ Canadá</div>
                        <div className="ml-3">
                          Selección de FilmAmed Turquía
                        </div>
                        <div className="ml-3">
                          Selección de Micgénero México
                        </div>
                        <div className="ml-3">
                          Selección de Transcinema Perú
                        </div>
                        <div className="ml-3">Selección LASA film festival</div>
                        <div className="ml-3">
                          Selección Yale University Festival
                        </div>
                        <div className="ml-3">
                          Muestra internacional de cine indígena de Chile
                        </div>
                        <div className="ml-3">
                          Muestra de cine de mujeres en el cine y la TV México
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
                    src="https://player.vimeo.com/video/280456340?h=1d92d3688f&byline=0&portrait=0"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="En el murmullo del viento Trailer"
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
