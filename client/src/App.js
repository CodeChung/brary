import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'><h1>Brary</h1></Link>
      </header>
      <main>
        <Sidebar/>
        <Route exact path='/' component={HomePage}/>
        <Route path='/search' component={Search}/>
      </main>
    </div>
  );
}

export default App;
