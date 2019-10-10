import React from 'react';
import './css/home.css';

import Typed from 'react-typed'
import Timer from './components/timer'
import { Jumbotron, Container, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink, Fade, Col, Collapse } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <>
        <Navigation />
        <div id={this.props.to} className='section'>
        <Col id='center-wrapper' sm="12" md={{ size: 6, offset: 3 }}>
          <Typed id='landing-typed' strings={['DVHackers']} typeSpeed={200}></Typed>
          <Fade id='tagline' in={true} timeout={3500}>Talk is cheap, show us the code.</Fade>
        </Col>

        <Fade in={true} timeout={3500}>
          <Col id='timer-wrapper' sm={{ size: 'auto' }}>
            <div id='timer-text'>Next Meeting In:&nbsp;</div>
            <Timer id='timer' day='0' time='18.5' delay='90'/>
          </Col>
        </Fade>
      </div>
      </>
    );
  }
}

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.state = {
      isOpen: false,
      currentScrollHeight: 1
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({ currentScrollHeight: window.scrollY })
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleEnter() {
    this.setState({ currentScrollHeight: 1});
  }

  handleLeave() {
    this.setState({ currentScrollHeight: window.scrollY });
  }


  render() {
    const opacity = Math.max(80 / this.state.currentScrollHeight, 0.2)

    return (
        <Navbar onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} style={{ opacity: opacity }} id='navbar' expand='lg' fixed='top' dark>
          <NavbarBrand href='/home/'><img id='navbrand' src={require('./img/logo.png')} alt='DVHackers' /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id='nav-items' className='ml-auto' navbar>
              <NavItem><NavLink href='#home'>Home</NavLink></NavItem>
              <NavItem><NavLink href='#team-page'>Team</NavLink></NavItem>
              <NavItem><NavLink href='#about'>About</NavLink></NavItem>
              <NavItem><NavLink href='#contact'>Contact</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    )
  }
}

export default Home;
