import React, { Component } from 'react';

class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0,0,0,0,0,0) };
    this.timeoutID = null;
  }
  
  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime()+1000);
      return { time: newTime };
    })
  }

  start = () => {
    this.stop();
    this.timeoutID = setTimeout(this.tick, 1000);
  }

  reset = () => {
    this.stop();
    this.setState({time:new Date(0,0,0,0,0,0)})
  }

  stop = () => { 
    clearTimeout(this.timeoutID);
    this.timeoutID = null;
  }

  componentDidMount = () => {
  }

  componentDidUpdate = () => {
    this.start();
  }
  
  componentWillUnmount = () => {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h2>{time.toLocaleTimeString('it-IT')}</h2>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default StopWatchTimeout;