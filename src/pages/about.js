import React from 'react';
import './css/about.css'
import { Container, Row } from 'reactstrap'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="about-bg" id={this.props.to}>
                <Container>
                    <Row>
                        About Us
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;