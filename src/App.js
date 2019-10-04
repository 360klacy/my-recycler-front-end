import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';
import Categories from './components/Categories';
import SignIn from './components/Quotes/SignIn';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/request/quotes" component={SignIn} />
            <Route path="/" component={Footer} />
        </div>
    </Router>
  );
}

export default App;
