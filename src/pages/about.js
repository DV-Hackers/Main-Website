import React from 'react';
import './css/about.css'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="section" id='about'>
                <div className="title">About Us</div>
                <div id="body">
                    <div id="description">DVHackers is a Computer Science club at Diablo Valley College that focuses on practicing software engineering interview questions, solving competitive programming problems, and building cool projects! We were founded in Fall of 2019 and have over 30 members. All DVC students, no matter your skill level, are welcome to join! We will begin meeting
 again in Spring 2020.</div>
                    <img src={require("./img/group-picture.jpeg")}/>
                </div>
            </div>
        );
    }
}

export default About;