import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (!this.state.isClicked) {
      return <button onClick={ this.handleClick }>Click Me!</button>;
    } else {
      return <button>Thanks!</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <CustomButton />;

root.render(element);
