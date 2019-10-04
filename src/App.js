import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
        </div>
    </Router>
  );
}

export default App;
