import React from 'react';
import './css/alumni.css'
import Card from './components/card'
import { Container, Jumbotron, Row } from 'reactstrap'

// 2019-2020
import jacobImg from './img/Hanson.jpg'
import canImg from './img/Koz.jpg'
import andrewImg from './img/Che.jpg'
import jakeImg from './img/Nations.jpg'
import umidImg from './img/Muradli.jpg'
import sebastianImg from './img/Lopez.jpg'
import omarImg from './img/Ahmadieh.jpg'
import avatarImg from './img/avatar.png'

//2020-2021
import mardanImg from './img/Mahmut.png'
import daehoonImg from './img/Kwack.png'
import daniyalImg from './img/Dianati.png'
import olenaImg from './img/Buriakova.png'
import rishiImg from './img/Thakkar.png'
import wonjaeImg from './img/Lee.png'

var members = [
{ "name": "Wonjae Lee", "email": "wonjaelee99@gmail.com", "github": "http://github.com/leewjae","linkedin": "https://www.linkedin.com/in/wonjae-lee-193b591b1/", "img": wonjaeImg },
{ "name": "Olena Buriakova","email": "oburiakova805@insite.4cd.edu", "github": "http://github.com/olenaaa", "linkedin": "https://www.linkedin.com/in/olena-buriakova-65a331194/", "img": olenaImg },
{ "name": "Daehoon Kwack","email": "daehoonkwack@gmail.com", "github": "http://github.com/dkwack4059", "linkedin": "https://www.linkedin.com/in/daehoon-kwack-00b591193/","img": daehoonImg },
{ "name": "Rishi Thakkar","email": "rishi.r.thakkar@gmail.com", "linkedin": "https://www.linkedin.com/in/rishi-thakkar-8a95a6157/", "img": rishiImg },
{ "name": "Daniyal Dianati","email": "ddianati001@insite.4cd.edu", "linkedin": "https://www.linkedin.com/in/daniel-dianati-72bb18154", "img": daniyalImg },
{ "name": "Mardan Mahmut", "email": "mardanmahmut@gmail.com", "github": "http://github.com/Mardan21", "linkedin": "https://www.linkedin.com/in/mardan-mahmut-840244173/", "img": mardanImg },
{ "name": "Can Koz", "email": "canxkoz@gmail.com", "github": "https://github.com/canxkoz", "linkedin": "https://www.linkedin.com/in/canxkoz/", "img": canImg },
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
          <Row className='row1'>{MemberList(members.slice(0,3))}</Row>
          <Row className='row2'>{MemberList(members.slice(3,6))}</Row>
          <Row className='row2'>{MemberList(members.slice(6,9))}</Row>
          <Row className='row2'>{MemberList(members.slice(9,13))}</Row>
      </div>
    )
  }
}
