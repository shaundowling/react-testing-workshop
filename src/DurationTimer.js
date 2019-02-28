import React from 'react'

class DurationTimer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }

  calculateDuration() {
    const start = Date.parse(this.props.start)
    const duration = this.state.time - start
    const d = new Date(duration)

    if(this.state.time < start) {
      return "Not started"
    }

    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        {this.calculateDuration()}
      </div>
    )
  }
}

DurationTimer.defaultProps = {
  start: 'Mar 01, 2019 15:00:00'
}

export default DurationTimer
