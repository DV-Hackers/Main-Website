import React from 'react';
import './css/about.css'

import { Jumbotron } from 'reactstrap'

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="background">
                About Us
            </div>
        );
    }
}

export default About;