import React from 'react'

/**
 * params
 * date [JS Date()]
 * day_in_week [int] 1 (Mon) - 7 (Sun)
 */
function nextWeekdayDate(date, day_in_week) {
  var ret = new Date(date||new Date())
  ret.setDate(ret.getDate() + (day_in_week - 1 - ret.getDay() + 7) % 7 + 1)
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
    this.day = Number(props.day)

    var date = new Date()
    date.setHours(Number(props.time.slice(0, 2)))
    date.setMinutes(Number(props.time.slice(2)))
    date.setSeconds(0)
    date = nextWeekdayDate(date, Number(props.day))
    this.secondsRemaining = Math.floor((date - (new Date())) / 1000)
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
    if (this.secondsRemaining <= 0) {
      d = 7
      h = 0
      m = 0
      s = 0
      this.secondsRemaining = Math.floor((nextWeekdayDate(new Date(), this.day) - new Date()) / 1000)
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
