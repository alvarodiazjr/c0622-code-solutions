import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const button = <CustomButton text="Click Me!"/>;

root.render(button);
