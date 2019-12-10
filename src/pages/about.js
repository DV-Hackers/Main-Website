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
                    <div id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nulla a justo ultricies, non pretium quam auctor. Aliquam a finibus nulla. Nam at felis porttitor, accumsan metus id, pretium risus. Morbi felis ipsum, iaculis sed orci id, feugiat ultrices metus. Etiam vel tristique augue. Ut rutrum lacus a varius lacinia. Nunc rutrum interdum mi a luctus. Duis ornare interdum felis, vel aliquam tortor consequat ut. Praesent consequat faucibus sem, sed maximus arcu faucibus vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Etiam varius nisi eu porttitor pulvinar. Integer sed consequat neque. Suspendisse imperdiet magna nibh, faucibus sodales sapien ultricies sit amet. Curabitur ultricies at arcu at ullamcorper. Nulla facilisi. Maecenas a velit suscipit, bibendum tortor a, ultricies ligula. Mauris at maximus odio, id suscipit neque. Etiam gravida eros id orci rutrum dignissim. Pellentesque et ante vitae orci ornare condimentum eget eget turpis. Donec rhoncus diam vitae nisl euismod finibus. Fusce ullamcorper posuere convallis. Quisque sodales libero vel urna lobortis, sit amet accumsan nisi lacinia.

Vivamus blandit elementum nulla, quis varius sapien sagittis vel. Nulla lobortis convallis mi, ac tincidunt lacus varius eu. Nam tincidunt tellus vitae urna blandit dignissim. Nullam tristique massa quis sem elementum gravida. Suspendisse malesuada molestie lacus vitae feugiat. Donec nec aliquam metus, nec gravida quam. Quisque gravida pharetra placerat.

                        Sed eu tempus mi. Aliquam euismod elit ut purus mollis bibendum. Quisque quis dapibus dui. Sed quis nibh vestibulum, vestibulum est in, dapibus tellus. Nunc gravida mauris in convallis pulvinar. Integer et dictum turpis. </div>
                    <img src={require("./img/group-picture.jpeg")}/>
                </div>
            </div>
        );
    }
}

export default About;