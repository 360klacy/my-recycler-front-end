import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import NavBar from "./Component/NavBar/NavBar";
import UserDashboard from './Component/UserDashboard/UserDashboard';

function App() {
  return (
		<Router>
			<div className="App">
        <Route path="/" component={NavBar}/>
				<Route exact path="/" component={Home} />
				<Route path="/userdashboard" component={UserDashboard} />
			</div>
		</Router>
	);

}

export default App;
