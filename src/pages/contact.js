import React from 'react';
import './css/contact.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-bg" id={this.props.to}>
                Contact Us
            </div>
        );
    }
}

export default Contact;