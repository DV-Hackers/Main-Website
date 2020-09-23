import React from 'react';
import './css/team.css'
import Card from './components/card'
import { Container, Jumbotron, Row } from 'reactstrap'
import jacobImg from './img/Hanson.jpg'
import canImg from './img/Koz.jpg'
import andrewImg from './img/Che.jpg'
import jakeImg from './img/Nations.jpg'
import umidImg from './img/Muradli.jpg'
import sibbsImg from './img/Lopez.jpg'
import omarImg from './img/Ahmadieh.jpg'
import avatarImg from './img/avatar.png'
import daehoonImg from './img/Kwack.png'
import daniyalImg from './img/Dianati.png'
import olenaImg from './img/Buriakova.png'
import mardanImg from './img/Mahmut.png'
import rishiImg from './img/Thakkar.png'
import wonjaeImg from './img/Lee.png'

var members = [{ "name": "Mardan Mahmut", "position": "President", "email": "mardanmahmut@gmail.com", "github": "http://github.com/Mardan21", "linkedin": "https://www.linkedin.com/in/mardan-mahmut-840244173/", "img": mardanImg },
{ "name": "Wonjae Lee", "position": "Vice President", "email": "wonjaelee99@gmail.com", "github": "http://github.com/leewjae", "img": wonjaeImg },
{ "name": "Olena Buriakova", "position": "ICC Rep", "email": "oburiakova805@insite.4cd.edu", "github": "http://github.com/olenaaa", "linkedin": "https://www.linkedin.com/in/olena-buriakova-65a331194/", "img": olenaImg },
{ "name": "Daehoon Kwack", "position": "Treasurer", "email": "daehoonkwack@gmail.com", "github": "http://github.com/dkwack4059", "linkedin": "https://www.linkedin.com/in/daehoon-kwack-00b591193/","img": daehoonImg },
{ "name": "Rishi Thakkar", "position": "Secretary", "email": "rishi.r.thakkar@gmail.com", "linkedin": "https://www.linkedin.com/in/rishi-thakkar-8a95a6157/", "img": rishiImg },
{ "name": "Daniyal Dianati", "position": "Officer", "email": "ddianati001@insite.4cd.edu", "linkedin": "https://www.linkedin.com/in/daniel-dianati-72bb18154", "img": daniyalImg },
]

function MemberList(members) {
  var jsx = []
  for (let member of members) {
    jsx.push(<Card data={member} />)
  }

  return jsx
}

export default class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section" id='team'>
          <Row className='title'>Our Officers</Row>
          <Row className='row1'>{MemberList(members.slice(0,3))}</Row>
          <Row className='row2'>{MemberList(members.slice(3,6))}</Row>
      </div>
    )
  }
}
