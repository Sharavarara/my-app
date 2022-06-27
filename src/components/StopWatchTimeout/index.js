import React, { Component } from 'react';
import styles from './StopWatchTimeout.module.css';

class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0,0,0,0,0,0) };
    this.timeoutID = null;
    this.onResetClicked = false;
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
    this.onResetClicked = true;
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
    !this.onResetClicked?this.start():this.onResetClicked=false;
  }
  
  componentWillUnmount = () => {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2 className={styles.zifferblatt}>{time.toLocaleTimeString('it-IT')}</h2>
        <div className={styles.btnContainer}>
          <button className={styles.startBtn} onClick={this.start}>START</button>
          <button className={styles.resetBtn} onClick={this.reset}>RESET</button>
          <button className={styles.stopBtn} onClick={this.stop}>STOP</button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeout;