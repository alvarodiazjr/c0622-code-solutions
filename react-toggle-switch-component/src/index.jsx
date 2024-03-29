import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <ToggleSwitch />;

root.render(element);
