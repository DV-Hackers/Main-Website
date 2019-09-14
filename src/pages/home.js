import React from 'react';
import './css/home.css';
import Typed from 'react-typed'
import Timer from './components/timer'
import { Jumbotron, Container, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class Home extends React.Component {
  render () {
    return (
        <Jumbotron fluid>
          <Navbar expand='md' fixed='top' dark>
            <NavbarBrand href='/home/'><img src='./img/logo.png' alt='DVHackers'/></NavbarBrand>
            <Nav className='ml-auto' navbar>
              <NavItem><NavLink href='/home/'>Home</NavLink></NavItem>
              <NavItem><NavLink href='/about/'>About</NavLink></NavItem>
              <NavItem><NavLink href='/team/'>Team</NavLink></NavItem>
              <NavItem><NavLink href='/contact/'>Contact</NavLink></NavItem>
            </Nav>
          </Navbar>

        <div id='center-wrapper'>
          <Typed id='landing-typed' strings={['DVHackers']} typeSpeed={200}></Typed>
          <div id='tag-line'>Talk is cheap. Show us the code</div>
        </div>

        <div id='timer-wrapper'>
          <div id='timer-text'>Time until next meeting: </div>
          <Timer date='September 16, 2019 18:30:00 PST' delay='90'/>
        </div>
        </Jumbotron>
    );
  }
}

export default Home;
