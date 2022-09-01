import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const clicked = this.state.isClicked;
    let text = '';
    let wrapperColor = '';
    let button = '';

    if (clicked === false) {
      text += 'OFF';
      wrapperColor += 'button-wrapper';
      button += 'button-off';
    } else {
      text += 'ON';
      wrapperColor += 'clicked-wrapper';
      button += 'button-on';
    }
    return (
      <div className='row'>
        <div className={ wrapperColor }>
          <button onClick={this.handleClick} className={ button }></button>
        </div>
        <p className='text'>{ text }</p>
      </div>
    );
  }
}

export default ToggleSwitch;
