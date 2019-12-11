import React from 'react';
import './css/contact.css'
import { Container, Row } from 'reactstrap'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="section" id="contact">
                <div className="title">Contact Us</div>
                <div className="body">Email our president: <a href='mailto:canxkoz@gmail.com'>canxkoz@gmail.com</a></div>
            </div>
        );
    }
}

export default Contact;