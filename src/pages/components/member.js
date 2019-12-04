import React from 'react'

export default class MemberCard extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.img = String(this.props.data['img'])
  }

  render () {
    return (
      <div className='member-card'>
        <img className='avatar' src={require('../img/profile.png')}/>
        <Info data={this.props.data}/>
      </div>
    )
  }
}

function Info(props) {
  return (
    <div className='info'>
      <div className='position'>{props.data['position']}</div>
      <div className='name'>{props.data['name']}</div>
    </div>
      //<div className='links'>
      //<a href={'mailto:' + props.data['email']}><svg viewBox="0 0 56 40" xmlns="http://www.w3.org/2000/svg">
       //<path transform="translate(-4,-8)" d="m10 8c-3.3137 0-6 2.6822-6 6 0.07439 9.0983 2e-4 18.728 0 28 0 3.1932 2.4839 5.7776 5.625 5.9688l44.625 0.03125c3.1993-0.1292 5.75-2.7649 5.75-6v-29.031c-0.48549-2.8287-2.9413-4.9688-5.9062-4.9688-14.69 0.00667-29.398 8e-5 -44.094 0zm-0.09375 3.1562h44.375l-21.469 21.469c-0.39174 0.39174-1.0145 0.39174-1.4062 0l-21.5-21.469zm47.094 1.5312v29.094c0 1.7334-0.6245 2.7125-1.875 3.0625l-15.125-15.156 17-17zm-49.656 0.125 16.719 16.719-15.281 15.281c-1.0462-0.35303-1.4104-1.1953-1.4375-2.3438v-29.656zm18.844 18.812 5.2188 5.25c0.39174 0.39174 1.0145 0.39174 1.4062 0l5.0625-5.0625 13.188 13.188h-38.25l13.375-13.375z"/>
      //</svg></a>
      //  {('github' in props.data) ?
      //    <a href={props.data['github']}><img src={require('../img/github.png')} alt='Github'/></a> :
      //    <div></div>}
      //</div>
  )
}