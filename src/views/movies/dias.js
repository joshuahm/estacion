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
          src={'assets/img-drive/still1.jpeg'}
          // src={require('assets/img-drive/still1.jpeg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/still2.jpeg'}
          // src={require('assets/img-drive/still2.jpeg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/still3.jpeg'}
          // src={require('assets/img-drive/still3.jpeg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/still4.jpeg'}
          // src={require('assets/img-drive/still4.jpeg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/still5.jpeg'}
          // src={require('assets/img-drive/still5.jpeg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/Still6.jpg'}
          // src={require('assets/img-drive/Still6.jpg').default}
        ></ReactIntense>
      </Item>
      <Item>
        <ReactIntense
          className="react-intense"
          src={'assets/img-drive/Still7.jpg'}
          // src={require('assets/img-drive/Still7.jpg').default}
        ></ReactIntense>
      </Item>
    </Rerousel>
  );
}

export default function DiasDeInvierno() {
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
          {/* <ParallaxLayer sticky={{ start: 0, end: 6 }}>
            <div
              className="text-white u-ver-bottom u-content-space"
              style={{ zIndex: 2000 }}
              onClick={() => {
                console.log(parallax.current);
                parallax.current.scrollTo(1);
              }}
            >
              <span className="fa fa-angle-down d-block"></span>
            </div>
          </ParallaxLayer> */}
          <ParallaxLayer
            offset={0}
            factor={1}
            speed={0}
            style={{ backgroundColor: '#6b2d5c' }}
          />
          <ParallaxLayer
            offset={1}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#96E6B3' }}
          />

          <ParallaxLayer
            offset={3}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#049f76' }}
          />
          <ParallaxLayer
            offset={5}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#87BCDE' }}
          />
          <ParallaxLayer
            offset={7}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#121233' }}
          />
          <ParallaxLayer
            offset={9}
            factor={2}
            speed={0}
            style={{ backgroundColor: '#053B06' }}
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
                      document.getElementById('trailer').src += '?autoplay=1';
                    }, 1500);
                  }}
                >
                  <img
                    className="img-custom"
                    src={'assets/img-drive/still5.png'}
                    // src={require('assets/img-drive/still5.png').default}
                    alt="Dias de Invierno Still"
                  ></img>
                  <h1 className="fixed-top text-center film-title">
                    Dias de Invierno <br />
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
                          <b>Título en español:</b> Días de Invierno
                        </div>
                        <div className="ml-3">
                          <b>Título en inglés:</b> Days of winter
                        </div>
                        <div className="ml-3">
                          <b>Género:</b> Drama
                        </div>
                        <div className="ml-3">
                          <b>Subgenero:</b> Coming to age, minimalista.
                        </div>
                        <div className="ml-3">
                          <b>Clasificación (por edad):</b> Más de 12 años.
                        </div>
                        <div className="ml-3">
                          <b>Formato de sonido:</b> 5.1
                        </div>
                        <div className="ml-3">
                          <b>Formato de proyección:</b> DCP
                        </div>
                        <div className="ml-3">
                          <b>Color / Blanco o negro:</b> Color.
                        </div>
                        <div className="ml-3">
                          <b>País:</b> México.
                        </div>
                        <div className="ml-3">
                          <b>Año de producción:</b> 2020
                        </div>
                        <div className="ml-3">
                          <b>Duración:</b> 90 minutos
                        </div>
                        <div className="ml-3">
                          <b>Diálogos e idioma:</b> Español e inglés.
                        </div>
                        <div className="ml-3">
                          <b>Cámara:</b> Arri Amira
                        </div>
                        <div className="ml-3">
                          <b>Lente utilizado ( tipo y marca):</b> Arri High
                          Speeds
                        </div>
                        <div className="ml-3">
                          <b>Aspect Ratio:</b> 1:1.85
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
                              'url(assets/img-drive/dias_still1.png)',
                              // 'url(' +
                              // require('assets/img-drive/dias_still1.png')
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
                          Néstor tiene un trabajo nocturno como recepcionista de
                          un hotel y no parece tener algún futuro. Su única
                          opción es irse a vivir con su hermana a Estados
                          Unidos, sin embargo, siendo el hijo menor y el único
                          que sigue viviendo con su madre, Lilia, no puede tomar
                          la decisión de irse. Lilia, recientemente ha perdido
                          su trabajo y también se encuentra buscando su camino.
                          Hay una cabaña que ata a ambos al pasado, el
                          reencuentro con ella desembocará en un cambio en sus
                          vidas.
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
                      <b>Compañías productoras:</b> Estación Marte Films,
                      Pirotecnia Films
                    </div>
                    <div className="ml-3">
                      <b>Dirección:</b> Jaiziel Hernández Máynez
                    </div>
                    <div className="ml-3">
                      <b>Producción:</b> Edgar Nito Arrache, Daniel Cabello,
                      Raymundo Hernández, Ramírez y Jaiziel Hernández Máynez
                    </div>
                    <div className="ml-3">
                      <b>Guión:</b> Jaiziel Hernández Máynez y Oriana Jimenez
                      Castro
                    </div>
                    <div className="ml-3">
                      <b>Productor ejecutivo:</b> Alejandra García y Antonio
                      Urdapilleta
                    </div>
                    <div className="ml-3">
                      <b>Fotografía:</b> Juan Pablo Ramirez Ibañez, AMC
                    </div>
                    <div className="ml-3">
                      <b>Sonido Directo:</b> Daniel Ortiz y Macarena Heredia
                    </div>
                    <div className="ml-3">
                      <b>Diseñador de Sonido:</b> Daniel Touron de Alba
                    </div>
                    <div className="ml-3">
                      <b>Operador de Mezcla THX:</b> Ivan Ramos
                    </div>
                    <div className="ml-3">
                      <b>Música original:</b> Leon Purviance, Carlos Pesina
                      Siller y Carlo Ayhillón
                    </div>
                    <div className="ml-3">
                      <b>Edición:</b> Lenz Claure, Arturo Manrique y Jaiziel
                      Hernández Máynez
                    </div>
                  </Col>
                  <Col className="text-white h4 text-contenido-chico">
                    <div className="ml-3">
                      <b>Dirección de Arte:</b> Diana Coral
                    </div>
                    <div className="ml-3">
                      <b>Ambientación:</b> Rodrigo Botello
                    </div>
                    <div className="ml-3">
                      <b>Diseño de vestuario:</b> Ornela Valdez
                    </div>
                    <div className="ml-3">
                      <b>Diseño de maquillaje:</b> Alejandra Ugalde
                    </div>
                    <div className="ml-3">
                      <b>Director de Casting:</b> Raymundo Hernández y Reginaldo
                      Chapa Romero
                    </div>
                    <div className="ml-3">
                      <b>Colorista:</b> Lisa Tillinger
                    </div>
                    <div className="ml-3">
                      <b>Fotos Fijas:</b> Reginaldo Chapa
                    </div>
                    <div className="ml-3">
                      <b>Reparto (nombre del personaje y nombre del actor):</b>
                    </div>
                    <div className="ml-5">
                      <b>Nestor:</b> Miguel Narro
                    </div>
                    <div className="ml-5">
                      <b>Lilia:</b> Leticia Huijara
                    </div>
                    <div className="ml-5">
                      <b>Gaby:</b> Saidde García Ulloa
                    </div>
                    <div className="ml-5">
                      <b>Pepe:</b> Cesar Ramones
                    </div>
                    <div className="ml-5">
                      <b>Mr. Feldman:</b> Peter Theis
                    </div>
                    <div className="ml-5">
                      <b>Doña Chelito:</b> Emma Mirthala
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
                          Selección oficial Festival Internacional de cine
                          FICUNAM, México, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Internacional de cine de
                          Guanajuato, México, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Internacional de cine de
                          Monterrey, México, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Internacional de cine de
                          Merida y Yucatán, México, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival de Guion Cinematográfico,
                          México, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Muestra de cine Coahuila, México,
                          2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Internacional de cine de
                          Gramado, Brasil, 2020
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Internacional de cine
                          London Film Week, Gran Bretaña, 2020 Selección oficial
                          Festival Pachamama Cinema de fronteira, Brasil, 2021
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival Latin and Native American
                          Film Festival, Estados Unidos, 2021 Selección oficial
                          Gira de cine Latinoamericano Cinema Nubo 2021
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival de cine mexicano de
                          Durango, México 2021
                        </div>
                        <div className="ml-3">
                          Selección oficial Festival internacional cine de León,
                          México 2021
                        </div>
                        <div className="ml-3">
                          Estímulo fiscal EFICINE Distribución 2021,
                          distribución nacional en cines, México, 2021 Selección
                          Oficial Semana del cine mexicano 2021 IMCINE
                        </div>
                        <div className="ml-3">
                          Selección oficial Latino Film Fest, Canadá, 2022
                          Selección oficial Festival internacional cine de
                          Ensenada, México, 2022
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
                    src="https://www.youtube.com/embed/9pswfmKklY8"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Dias de Invierno Trailer"
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

/* <div className="mt-2">
  <h3 className="font-weight mb-1">Palabras del director</h3>

  <blockquote className="blockquote-v1 u-font-size-100">
    Planteo que los lazos que creamos con nuestros padres y hermanos
    son las relaciones más fuertes que creamos con otros seres
    humanos, incluso contra nuestra propia voluntad.
  </blockquote>
</div>
<div className="mt-2">
  <h3 className="font-weight mb-1">Semblanza del director</h3>
  <blockquote className="blockquote-v1 u-font-size-100">
    Egresado del Centro de Capacitación Cinematográfica, ha realizado
    fotografía en proyectos de narrativa visual principalmente
    ficción, así como dirección de documental. Florería y Edecanes
    (2011) su primer mediometraje documental ha sido mostrado
    internacionalmente en mas de 15 festivales así como en la gira de
    documentales Ambulante (2012) y el ciclo de Cine Documental
    Mexicano Sumario (2013) curado por la Cineteca Nacional. Desde
    2014 a finales de 2017 fotografió el documental "Hasta los
    dientes" apoyado por Foprocine en 2016 y por la beca canadiense
    Altercinema, mostrado en la gira de documentales Ambulante 2018,
    ganador del premio Camera Justitia en el festival de cine “Movies
    that matter 2019 en la Haya, Países Bajos y actualmente en el
    catálogo de Netflix en Estados Unidos y México.
  </blockquote>
</div> */
