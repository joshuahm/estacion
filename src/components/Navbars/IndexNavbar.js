import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function IndexNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState('');
  const [color, setColor] = React.useState('navbar-transparent');
  React.useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return function cleanup() {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-darker');
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent');
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out');
  };
  const onCollapseExited = () => {
    setCollapseOut('');
  };
  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          {!props.avoid_title_link && (
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <span>Estación Marte Films</span>
            </NavbarBrand>
          )}
          {props.avoid_title_link && (
            <NavbarBrand id="navbar-brand">
              <span style={{ userSelect: 'none' }}>Estación Marte Films</span>
            </NavbarBrand>
          )}
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={'justify-content-end ' + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="9">
                <b onClick={(e) => e.preventDefault()}>Estación Marte Films</b>
              </Col>
              <Col className="collapse-close text-right" xs="3">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <Link to="/cine">
                <Button className="nav-link btn-link btn-simple">Cine</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/documental">
                <Button className="nav-link btn-link btn-simple">
                  Documental
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/publicidad">
                <Button className="nav-link btn-link btn-simple">
                  Publicidad / Contenido
                </Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contacto">
                <Button className="nav-link btn-link btn-simple">
                  Contacto
                </Button>
              </Link>
            </NavItem>
            <hr
              className="d-lg-none d-xl-none"
              style={{
                width: '10rem',
                color: 'white',
                backgroundColor: 'white',
              }}
            />
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/EstacionMarteFilms"
                rel="noopener noreferrer"
                target="_blank"
                title="Siguenos en Facebook"
              >
                <i className="fab fa-facebook" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/EstacionFilms"
                rel="noopener noreferrer"
                target="_blank"
                title="Siguenos en Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/estacionmartefilms"
                rel="noopener noreferrer"
                target="_blank"
                title="Siguenos en Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
