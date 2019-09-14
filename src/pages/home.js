import React from 'react';
import './css/home.css';

import Typed from 'react-typed'
import Timer from './components/timer'
import { Jumbotron, Container, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink, Fade, Col } from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
        <Jumbotron fluid>
          <Navbar expand='md' fixed='top' dark>
            <NavbarBrand href='/home/'><img id='navbrand' src={require('./img/logo.png')} alt='DVHackers'/></NavbarBrand>
            <Nav id='nav-items' className='ml-auto' navbar>
              <NavItem><NavLink href='/home/'>Home</NavLink></NavItem>
              <NavItem><NavLink href='/about/'>About</NavLink></NavItem>
              <NavItem><NavLink href='/team/'>Team</NavLink></NavItem>
              <NavItem><NavLink href='/contact/'>Contact</NavLink></NavItem>
            </Nav>
          </Navbar>

        <Col id='center-wrapper' sm="12" md={{ size: 6, offset: 3 }}>
          <Typed id='landing-typed' strings={['DVHackers']} typeSpeed={200}></Typed>
          <Fade id='tagline' in={true} timeout={3500}>Talk is cheap, show us the code.</Fade>
        </Col>

        <Fade in={true} timeout={3500}>
          <Col id='timer-wrapper' sm={{ size: 'auto' }}>
            <div id='timer-text'>Time until next meeting:&nbsp;</div>
            <Timer date='September 16, 2019 18:30:00 PST' delay='90'/>
          </Col>
        </Fade>
      </Jumbotron>
    );
  }

  componentDidMount() {
    setTimeout(this.fadeIn, 3000)
  }
}

export default Home;
