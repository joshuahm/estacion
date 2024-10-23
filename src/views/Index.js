import React from 'react';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import { Container } from 'reactstrap';

// const minWidth = 512 + 256;

class Index extends React.Component {
  constructor(props) {
    super(props);
    // const { innerWidth: width } = window;
    this.state = {
      is_muted: true,
      hide_logo: false,
    };
    document.body.classList.toggle('index-page');
    this.endedHandler = this.endedHandler.bind(this);
    // this.handleResize = this.handleResize.bind(this);
  }

  // handleResize() {
  //   const { innerWidth: width } = window;
  //   if (!document.getElementById('home-video')) return;
  //   if (width < minWidth) {
  //     document.getElementById('home-video').pause();
  //     this.setState({ hide_video: true });
  //   } else {
  //     document.getElementById('home-video').play();
  //   }
  // }

  componentDidMount() {
    document.getElementById('home-video').play();
    // document.getElementById('home-video').muted = false;
    // const { innerWidth: width } = window;
    // if (width >= minWidth) {
    //   document.getElementById('home-video').play();
    // }
    // window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
    document.body.classList.remove('index-page');
  }

  endedHandler() {
    this.setState({ hide_logo: false });
    setTimeout(() => {
      this.setState({ hide_logo: true });
    }, 2000);
    document.getElementById('home-video').play();
  }

  toggleSound = () => {
    document.getElementById('home-video').muted =
      !document.getElementById('home-video').muted;
    this.setState({
      is_muted: !this.state.is_muted,
    });
    if (!this.state.hide_logo) {
      setTimeout(() => {
        this.setState({ hide_logo: true });
      }, 2000);
    }
  };

  render() {
    return (
      <>
        <>
          <IndexNavbar avoid_title_link="true" />
          <div className="wrapper">
            <div className="page-header header-filter">
              <Container style={{ width: '100%', height: '100%' }}>
                <div className="content-center brand">
                  <img
                    src='assets/img-drive/estacion-marte-logo-blanco.png'
                    // {
                    //   require('assets/img-drive/estacion-marte-logo-blanco.png')
                    //     .default
                    // }
                    alt="Estacion Marte Films"
                    style={{
                      width: '100%',
                      transition: 'all 2s ease-in-out',
                      opacity: this.state.hide_logo ? '0' : '0.7',
                      visibility: this.state.hide_logo ? 'hidden' : 'visible',
                    }}
                  />
                </div>
              </Container>
            </div>
            <div className="main"></div>
          </div>
        </>
        <div
          className="fixed-top"
          style={{ height: '100%' }}
          onClick={this.toggleSound}
        >
          <div className="fixed-bottom text-right m-4">
            <button className="btn-icon btn-neutral btn-round btn-simple">
              <i
                className={
                  'fas mr-1 ' +
                  (this.state.is_muted ? 'fa-volume-off' : 'fa-volume-up')
                }
              />
            </button>
          </div>
        </div>
        <>
          <div className="video-container">
            <video
              id="home-video"
              preload="true"
              muted
              volume="0"
              width="640"
              height="360"
              onEnded={this.endedHandler}
            >
              <source src="/video/intro_11m.webm" type="video/webm"></source>
            </video>
          </div>
        </>
      </>
    );
  }
}

export default Index;
