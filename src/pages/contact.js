import React from 'react';
import './css/contact.css'
import { Container, Row } from 'reactstrap'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-bg" id={this.props.to}>
                <Container>
                    <Row>
                        Contact Us
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;