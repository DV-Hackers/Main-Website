import React from 'react';
import './css/alumni.css'
import Card from './components/card'
import { Container, Jumbotron, Row } from 'reactstrap'
import jacobImg from './img/Hanson.jpg'
import canImg from './img/Koz.jpg'
import andrewImg from './img/Che.jpg'
import jakeImg from './img/Nations.jpg'
import umidImg from './img/Muradli.jpg'
import sebastianImg from './img/Lopez.jpg'
import omarImg from './img/Ahmadieh.jpg'
import avatarImg from './img/avatar.png'

var members = [{ "name": "Can Koz", "email": "canxkoz@gmail.com", "github": "https://github.com/canxkoz", "linkedin": "https://www.linkedin.com/in/canxkoz/", "img": canImg },
{ "name": "Andrew Che", "email": "andrew.che0122@gmail.com", "github": "https://github.com/drewche", "linkedin": "https://www.linkedin.com/in/andrew-che-314a55172/", "img": andrewImg },
{ "name": "Jacob Hanson", "email": "jhanreg11@gmail.com", "github": "https://github.com/jhanreg11", "linkedin": "https://www.linkedin.com/in/jacob-h-1746a7117/", "img": jacobImg },
{ "name": "Jake Nations", "email": "jakenations4@gmail.com", "github": "https://github.com/ClassicNations", "linkedin": "https://www.linkedin.com/in/jake-nations-5b9a53136/","img": jakeImg },
{ "name": "Umid Muradli", "github": "https://github.com/umidmurad", "linkedin": "https://www.linkedin.com/in/umid-muradli-a0b22913b/", "img": umidImg },
{ "name": "Sebastian Lopez", "email": "lopezsebastian856@gmail.com", "linkedin": "https://www.linkedin.com/in/sebastian-lopez-5b7733168/", "img": sebastianImg },
{ "name": "Omar Ahmadieh", "linkedin": "https://www.linkedin.com/in/omar-ahmadieh-4b53b015b/", "img": omarImg }
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
      <div className="section" id='alumni'>
          <Row className='title'>Alumni</Row>
          <Row className='row1'>{MemberList(members.slice(0,4))}</Row>
          <Row className='row2'>{MemberList(members.slice(4,7))}</Row>
      </div>
    )
  }
}
