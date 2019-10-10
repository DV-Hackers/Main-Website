import React from 'react'

function nextWeekDay(day, time) {
  var ret = new Date()
  console.log(ret)
  ret.setDate(ret.getDate() + (day - 1 - ret.getDay() + 7) % 7 + 1)
  console.log(ret)
  ret.setTime(ret.getTime() + time*3.6e+6)
  console.log(ret)
  return ret
}

// WILL CHANGE SIZE IF NOT USING MONOSPACE FONT
export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    }

    // seconds per week
    this.secondsPerPeriod = 604800
    this.secondsRemaining = Math.floor((nextWeekDay(parseFloat(this.props.day), parseFloat(this.props.time)) - Date.now()) / 1000)
    console.log(this.secondsRemaining)
    this.tick = this.tick.bind(this)
  }

  render() {
    return (
      <div id='timer'>{this.state.days}:{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
    )
  }

  componentDidMount() {
    this.intervalHandle = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle)
  }

  tick() {
    this.secondsRemaining--

    var d, h, m, s;
    if (this.secondsRemaining == 0) {
      d = 7
      h = 0
      m = 0
      s = 0
      this.secondsRemaining = this.secondsPerPeriod
    }
    else {
      var d = Math.floor(this.secondsRemaining / 86400)
      var h = Math.floor((this.secondsRemaining - (86400 * d)) / 3600)
      var m = Math.floor((this.secondsRemaining - (86400 * d) - (3600 * h)) / 60)
      var s = this.secondsRemaining - (86400 * d) - (3600 * h) - (60 * m)
    }

    this.setState({
      days: d,
      hours: h,
      minutes: m,
      seconds: s
    })

    if (d < 10) {
      this.setState({
        days: '0' + d,
      })
    }

    if (h < 10) {
      this.setState({
        hours: '0' + h,
      })
    }

    if (m < 10) {
      this.setState({
        minutes: '0' + m,
      })
    }

    if (s < 10) {
      this.setState({
        seconds: '0' + s,
      })
    }
  }
}
