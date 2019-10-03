import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Categories from './components/Categories';
import RequestQuote from './components/Quotes/RequestQuote';

function App() {
  return (
    <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/request/quotes" component={RequestQuote} />
        </div>
    </Router>
  );
}

export default App;
