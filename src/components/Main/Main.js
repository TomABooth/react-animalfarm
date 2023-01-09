import React from 'react';
import './Main.css';
import background from '../../background.png';

export default function Main() {
  return <main className="App" style={{ backgroundImage: `url(${background})` }}></main>;
}
