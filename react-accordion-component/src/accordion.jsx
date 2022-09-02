import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: null
    };
    this.headerClick = this.headerClick.bind(this);
  }

  headerClick(event) {
    const clickedHeader = event.target.getAttribute('header');
    if (clickedHeader === this.state.isOpened) {
      this.setState({ isOpened: null });
    } else {
      this.setState({ isOpened: clickedHeader });
    }
  }

  render() {
    const menu = this.props.languages.map(languages => {
      let display = '';
      if (languages.header === this.state.isOpened) {
        display += 'visible';
      } else {
        display += 'hidden';
      }
      return (
        <div key={languages.header} className='wrapper' >
          <div onClick={this.headerClick} header={languages.header} className='blocks header'>{languages.header}</div>
          <div className={`blocks ${display}`}>{languages.description}</div>
        </div>
      );
    });
    return menu;
  }
}

export default Accordion;
