import React from 'react';
import './css/home.css';
import Scrollchor from 'react-scrollchor'
import Typed from 'react-typed'
import Timer from './components/timer'
import { Jumbotron, Container, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink, Fade, Col, Collapse } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
        <div id={this.props.to}>
          <Navbar id='navbar' expand='lg' fixed='top' >
            <NavbarBrand href='/home/'><img id='navbrand' src={require('./img/logo.png')} alt='DVHackers'/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="navbar-dark"/>
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id='nav-items' className='ml-auto' navbar>
              <NavItem><Scrollchor to='#home' animate={{duration: 100}} className="nav-link">Home</Scrollchor></NavItem>
              <NavItem><Scrollchor to='#about' animate={{duration: 100}} className="nav-link">About</Scrollchor></NavItem>
              <NavItem><Scrollchor to='#team' animate={{duration: 100}} className="nav-link">Team</Scrollchor></NavItem>
              <NavItem><Scrollchor to='#contact' animate={{duration: 100}} className="nav-link">Contact</Scrollchor></NavItem>
              <NavItem><NavLink href="https://docs.google.com/document/d/1yOUVi6mwTw6wB9YWs2LWQDxFWilNm3MVE500RU_8Buw/edit?usp=sharing" target="_blank">Meetings</NavLink></NavItem>
            </Nav>
            </Collapse>
          </Navbar>

        <Col id='center-wrapper' sm="12" md={{ size: 6, offset: 3 }}>
          <Typed id='landing-typed' strings={['DVHackers']} typeSpeed={200}></Typed>
          <Fade id='tagline' in={true} timeout={3500}>Talk is cheap, show us the code.</Fade>
        </Col>

          {/*<Fade in={true} timeout={3500}>
          <Col id='timer-wrapper' sm={{ size: 'auto' }}>
            <div id='timer-text'>Time until next meeting:&nbsp;</div>
            <Timer id='timer' day="1" time="1830" delay='90'/>
          </Col>
        </Fade>*/}
      </div>
    );
  }
}

export default Home;
