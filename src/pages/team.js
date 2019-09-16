import React from 'react';
import './css/team.css'
import MemberCard from './components/member'
import { Col, Jumbotron } from 'reactstrap'

var members = [{"name": "Can Koz", "position": "President", "email": "canxkoz@gmail.com", "github": "http://github.com/canxkoz", "linkedin": "", "img":"../img/profile.png"},
{"name": "Andrew Che", "position": "Vice President", "email": "andrew.che0122@gmail.com", "github": "http://github.com/drewche", "linkedin": "", "img":"../img/profile.png"},
{"name": "Jacob Hanson", "position": "Officer", "email": "jhanreg11@gmail.com", "github": "http://github.com/jhanreg11", "linkedin": "", "img":"../img/profile.png"},
{"name": "Peter Aleman", "position": "Officer", "email": "paleman982@insite.4cd.edu", "img":"../img/profile.png"},
{"name": "Sebastian Lopez", "position": "Officer", "email":"lopezsebastian856@gmail.com", "github": "http://github.com/SirSebastian"},
{"name": "Jake Nations", "position": "Officer", "email": "jakenations4@gmail.com", "github":"http://github.com/ClassicNations"},

]

function MemberList(members) {
  var jsx = []
  console.log(members)
  for (let member of members) {
    console.log(member)
    jsx.push(<MemberCard data={member}/>)
  }

  return jsx
}

export default class Team extends React.Component {
  render() {
    return (
      <Jumbotron id='team-page'>
        <Col className='section'>
          <Col className='title'>Our Officers</Col>
          <Col className='body'>{MemberList(members)}</Col>
        </Col>
      </Jumbotron>
    )
  }
}
