import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
class Pokemon extends React.Component {
  render() {
    const list = pokedex.map(pokedex => <li key={pokedex.number}>{pokedex.name}</li>);
    return (
      <ul>{list}</ul>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <Pokemon />;

root.render(element);
