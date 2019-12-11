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

var members = [{ "name": "Can Koz", "position": "President", "email": "canxkoz@gmail.com", "github": "http://github.com/canxkoz", "linkedin": "https://www.linkedin.com/in/canxkoz/", "img": canImg },
{ "name": "Andrew Che", "position": "Vice President", "email": "andrew.che0122@gmail.com", "github": "http://github.com/drewche", "linkedin": " https://www.linkedin.com/in/andrew-che-314a55172/", "img": andrewImg },
{ "name": "Jacob Hanson", "position": "Officer", "email": "jhanreg11@gmail.com", "github": "http://github.com/jhanreg11", "linkedin": "https://www.linkedin.com/in/jacob-h-1746a7117/", "img": jacobImg },
{ "name": "Jake Nations", "position": "Officer", "email": "jakenations4@gmail.com", "github": "http://github.com/ClassicNations", "linkedin": "https://www.linkedin.com/in/jake-nations-5b9a53136/","img": jakeImg },
{ "name": "Sebastian Lopez", "position": "Officer", "email": "lopezsebastian856@gmail.com", "github": "http://github.com/SirSebastian", "linkedin": "https://www.linkedin.com/in/sebastian-lopez-5b7733168/", "img": sibbsImg },
{ "name": "Umid Muradli", "position": "Secretary", "email": "umid.murad@hotmail.com", "github": "https://github.com/umidmurad", "linkedin": "https://www.linkedin.com/in/umid-muradli-a0b22913b", "img": umidImg },
{ "name": "Omar Ahmadieh", "position": "Officer", "email": "omarelahmadieh@hotmail.com", "img": omarImg },
{ "name": "Peter Aleman", "position": "Officer", "email": "paleman982@insite.4cd.edu", "img": avatarImg },
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
          <Row className='row1'>{MemberList(members.slice(0,2))}</Row>
          <Row className='row2'>{MemberList(members.slice(2,5))}</Row>
          <Row className='row1'>{MemberList(members.slice(5,8))}</Row>
      </div>
    )
  }
}
