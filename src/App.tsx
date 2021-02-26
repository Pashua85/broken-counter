import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassNumberCounter from './components/ClassNumberCounter';
import ClassArrayCounter from './components/ClassArrayCounter';

function App() {
  return (
    <div className="App">
      <h1>Counters</h1>
      <div style={{marginBottom: '20px'}}>
        <ClassNumberCounter />
      </div>
      
      <ClassArrayCounter />
    </div>
  );
}

export default App;
