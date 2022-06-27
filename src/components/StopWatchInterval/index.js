import React, { Component } from 'react';
import styles from './StopWatchInterval.module.css';

class StopWatchInterval extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0,0,0,0,0,0) };
    this.idInterval = null;
  }
  
  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime()+1000);
      return { time: newTime };
    })
  }

  start = () => { 
    if(!this.idInterval){
      this.idInterval = setInterval(this.tick, 1000)
    };
  }

  reset = () => {
    this.stop();
    this.setState({time:new Date(0,0,0,0,0,0)})
  }

  stop = () => { 
    clearInterval(this.idInterval);
    this.idInterval = null;
  }

  componentDidMount = () => {
  }

  componentDidUpdate = () => {

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

export default StopWatchInterval;
