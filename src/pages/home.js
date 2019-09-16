import React from 'react';
import './css/home.css';

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
        <Jumbotron >
        <div id='landing-page'>
          <Navbar id='navbar' expand='lg' fixed='top' dark>
            <NavbarBrand href='/home/'><img id='navbrand' src={require('./img/logo.png')} alt='DVHackers'/></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id='nav-items' className='ml-auto' navbar>
              <NavItem><NavLink href='#landing-page'>Home</NavLink></NavItem>
              <NavItem><NavLink href='About'>About</NavLink></NavItem>
              <NavItem><NavLink href='#team-page'>Team</NavLink></NavItem>
              <NavItem><NavLink href='/contact/'>Contact</NavLink></NavItem>
            </Nav>
            </Collapse>
          </Navbar>

        <Col id='center-wrapper' sm="12" md={{ size: 6, offset: 3 }}>
          <Typed id='landing-typed' strings={['DVHackers']} typeSpeed={200}></Typed>
          <Fade id='tagline' in={true} timeout={3500}>Talk is cheap, show us the code.</Fade>
        </Col>

        <Fade in={true} timeout={3500}>
          <Col id='timer-wrapper' sm={{ size: 'auto' }}>
            <div id='timer-text'>Time until next meeting:&nbsp;</div>
            <Timer id='timer' date='September 16, 2019 18:30:00 PST' delay='90'/>
          </Col>
        </Fade>
      </div>
      </Jumbotron>
    );
  }
}

export default Home;
