import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isTicking: false
    };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleClockClick = this.handleClockClick.bind(this);
  }

  handleIconClick() {
    if (this.state.isTicking) {
      clearInterval(this.intervalId);
    } else {
      this.intervalId = setInterval(() => this.tick(), 1000);
    }
    this.setState({ isTicking: !this.state.isTicking });
  }

  handleClockClick() {
    if (!this.state.isTicking) {
      clearInterval(this.intervalId);
      this.setState({ count: 0 });
    }
  }

  tick() {
    const addTick = this.state.count + 1;
    this.setState({ count: addTick });
  }

  render() {
    const count = this.state.count;
    let icon = '';
    if (this.state.isTicking === false) {
      icon += 'fa-solid fa-play';
    } else {
      icon += 'fa-solid fa-pause';
    }
    return (
      <div className='row'>
        <div className='column-full'>
          <h1 onClick={this.handleClockClick} className='count'>{count}</h1>
          <i onClick={this.handleClockClick} className='fa-regular fa-circle'></i>
        </div>
        <div className='column-full'>
          <i onClick={this.handleIconClick} className={icon}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
