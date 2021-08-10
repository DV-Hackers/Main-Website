import React from 'react';
import './css/team.css'
import Card from './components/card'
import { Container, Jumbotron, Row } from 'reactstrap'


import youssefImg from './img/youssef.jpg'
import yahyaImg2 from './img/Yahya2.jpg'
import aliImg from './img/Ali.JPG'
import lyciaImg from './img/Lycia.jpg'

var members = [
{ "name": "Youssef Qteishat", "position": "President", "email": "youssef.qt1@gmail.com", "github": "https://github.com/youssef-qteishat", "linkedin": "https://www.linkedin.com/in/youssef-qteishat-34b05a203", "img": youssefImg },
{ "name": "Ali Tout", "position": "Vice President", "email": "at4882@gmail.com", "github": "https://github.com/Creater2036", "linkedin": " https://www.linkedin.com/in/ali-tout-0067961ba", "img": aliImg },
{ "name": "Yahya Qʈeishat", "position": "Secretary", "email": "yahya.qteishat@gmail.com", "github": "https://github.com/yahya-s9","img": yahyaImg2 },
{ "name": "Lycia Yousfi", "position": "Secretary", "email": "lyciayousfi@gmail.com", "linkedin": "https://www.linkedin.com/in/lycia-yousfi-1299356a","img": lyciaImg },
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
      </div>
    )
  }
}
