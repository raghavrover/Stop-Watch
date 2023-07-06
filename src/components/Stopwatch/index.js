import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {timer: '00:00'}
  }

  onStart = () => {
    const {timer} = this.state

    let minutes = parseInt(timer.slice(0, 2))
    let seconds = parseInt(timer.slice(3, 6))
    this.intervalId = setInterval(() => {
      seconds += 1
      const minFormat = minutes < 10 ? `0${minutes}` : minutes
      const secFormat = seconds < 10 ? `0${seconds}` : seconds
      if (seconds === 59) {
        minutes += 1
        seconds = -1
      }
      this.setState({timer: `${minFormat}:${secFormat}`})
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    this.setState({
      timer: '00:00',
    })
    clearInterval(this.intervalId)
  }

  render() {
    const {timer} = this.state

    return (
      <div className="stop-watch-bg-container">
        <div className="stop-watch-card">
          <h1 className="title">Stopwatch</h1>
          <div className="stop-watch-console">
            <div className="timer-text-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-icon-img"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>

            <h1 className="time">{timer}</h1>

            <div className="control-btns-container">
              <button
                className="control-btn start"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="control-btn stop"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="control-btn reset"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
