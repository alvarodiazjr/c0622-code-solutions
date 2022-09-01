import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const addClick = this.state.clicks + 1;
    this.setState({ clicks: addClick });
  }

  render() {
    const clickNum = this.state.clicks;
    let color = 'button ';
    if (clickNum < 3) {
      color += 'no-color';
    } else if (clickNum < 6) {
      color += 'purple';
    } else if (clickNum < 9) {
      color += 'light-purple';
    } else if (clickNum < 12) {
      color += 'red';
    } else if (clickNum < 15) {
      color += 'orange';
    } else if (clickNum < 18) {
      color += 'yellow';
    } else {
      color += 'white';
    }
    return <button onClick={this.handleClick} className={color}>Hot Button</button>;
  }
}

export default HotButton;
