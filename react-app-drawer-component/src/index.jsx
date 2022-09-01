import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <AppDrawer />;

root.render(element);
