import React from 'react';
import './css/about.css'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="about-bg" id={this.props.to}>
                About Us
            </div>
        );
    }
}

export default About;