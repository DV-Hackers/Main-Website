import React from 'react'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.img = String(this.props.data['img'])
        this.overlay = <Overlay data={this.props.data}/>
    }

    render() {
        return (
            <div className='card-container' onMouseEnter={this.overlay.enter} onMouseLeave={this.overlay.leave}>
                <img src={require('../img/avatar.png')} className='card-img'/>
                <Overlay data={this.props.data}/>
            </div>
        )
    }
}

class Overlay extends React.Component {
    constructor(props) {
        super(props)
        this.enter = this.enter.bind(this)
        this.leave = this.leave.bind(this)
    }

    render() {
        return (
            <div className='overlay'>
                <div className='overlay-position'>{this.props.data['position']}</div>
                <div className='overlay-name'>{this.props.data['name']}</div>
                <div className='links'>
                    {'github' in this.props.data ?
                        <a className='overlay-link github' href={this.props.data['github']}><img className="link-image github" src={require('../img/github.png')}/></a> :
                        <a></a>}
                    {'linkedin' in this.props.data ?
                        <a className='overlay-link' href={this.props.data['linkedin']}><img className="link-image linkedin" src={require('../img/linkedin.png')}/></a> :
                        <a ></a>}
                    {'email' in this.props.data ?
                        <a className='overlay-link' href={this.props.data['email']}><img className="link-image email" src={require('../img/email.png')}/></a> :
                        <a></a>}
                </div>
            </div>
        )
    }

    enter() {
        this.setState({
            visible: true
        })
    }

    leave() {
        this.setState({
            visible: false
        })
    }
}