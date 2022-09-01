import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpened: false };
    this.clickIcon = this.clickIcon.bind(this);
    this.clickLinks = this.clickLinks.bind(this);
  }

  clickIcon() {
    this.setState({ menuOpened: true });
  }

  clickLinks() {
    this.setState({ menuOpened: false });
  }

  render() {
    const menu = this.state.menuOpened ? 'visible' : 'hidden';
    const icon = this.state.menuOpened ? 'hidden' : 'visible';
    return (
      <div className='row'>
        <i onClick={this.clickIcon} className={`fa-solid fa-bars ${icon}`}></i>
        <div className={`menu ${menu}`}>
          <h1>Menu</h1>
          <h3 onClick={this.clickLinks} className='links'>About</h3>
          <h3 onClick={this.clickLinks} className='links'>Get Started</h3>
          <h3 onClick={this.clickLinks} className='links'>Sign In</h3>
        </div>
        <div onClick={this.clickLinks} className={`modal ${menu}`}></div>
      </div>
    );
  }
}

export default AppDrawer;
