import React from 'react'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.overlay = <Overlay data={this.props.data}/>

    }

    render() {
        return (
            <div className='card-container' onClick={this.overlay.toggle}>
                <img src={this.props.data.img} className='card-img'/>
                {this.overlay}
            </div>
        )
    }
}

class Overlay extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            class: 'overlay'
        }
    }

    toggle() {
        console.log('hi')
        if (this.state.class == 'overlay')
            this.setState({class:'overlay active'})
        else
            this.setState({class:'overlay'})
    }


    render() {
        return (
            <div className={this.state.class} onClick={this.toggle}>
                <div className='overlay-position'>{this.props.data['position']}</div>
                <div className='overlay-name'>{this.props.data['name']}</div>
                <div className='links'>
                    {'github' in this.props.data ?
                        <a className='overlay-link github' href={this.props.data['github']} target="_blank"><img className="link-image github" src={require('../img/github.png')}/></a> :
                        <a></a>}
                    {'linkedin' in this.props.data ?
                        <a className='overlay-link' href={this.props.data['linkedin']} target="_blank"><img className="link-image linkedin" src={require('../img/linkedin.png')}/></a> :
                        <a ></a>}
                    {'email' in this.props.data ?
                        <a className='overlay-link' href={"mailto:"+this.props.data['email']} target="_blank"><img className="link-image email" src={require('../img/email.png')}/></a> :
                        <a></a>}
                </div>
            </div>
        )
    }
}