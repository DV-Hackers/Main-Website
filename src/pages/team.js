import React from 'react';
import './css/team.css'
import Card from './components/card'
import { Container, Jumbotron, Row } from 'reactstrap'

var members = [{ "name": "Can Koz", "position": "President", "email": "canxkoz@gmail.com", "github": "http://github.com/canxkoz", "linkedin": "", "img": "../img/profile.png" },
{ "name": "Andrew Che", "position": "Vice President", "email": "andrew.che0122@gmail.com", "github": "http://github.com/drewche", "linkedin": "", "img": "../img/profile.png" },
{ "name": "Jacob Hanson", "position": "Officer", "email": "jhanreg11@gmail.com", "github": "http://github.com/jhanreg11", "linkedin": "", "img": "../img/profile.png" },
{ "name": "Jake Nations", "position": "Officer", "email": "jakenations4@gmail.com", "github": "http://github.com/ClassicNations" },
{ "name": "Sebastian Lopez", "position": "Officer", "email": "lopezsebastian856@gmail.com", "github": "http://github.com/SirSebastian" },
{ "name": "Umid Muradli", "position": "Secretary", "email": "", "github": "", "img": "../img/profile.png"},
{ "name": "Omar Ahmadieh", "position": "Officer", "email": "", "github": "", "img": "../img/profile.png"},
{ "name": "Peter Aleman", "position": "Officer", "email": "paleman982@insite.4cd.edu", "img": "../img/profile.png" },

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
