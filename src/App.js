import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import NavBar from "./Component/NavBar/NavBar";
import UserDashboard from './Component/UserDashboard/UserDashboard';
import CompanyDashboard from './Component/CompanyDashboard/CompanyDashboard';

class App extends React.Component{
	constructor(props){
		super(props)
	this.state ={
		authToken : null, name : null, email: null,
	}
	}
	_setToken=(authToken,name,email)=>{
		this.setState({
			authToken,
			name,
			email

		})
	}
	//condidtional rendring. 
	render(){
  return (
		<Router>
			<div className="App">
  				<Route path="/" render={(props)=><NavBar {...props} authToken={this.state.authToken} setToken={this._setToken} /> }/>
				<Route exact path="/" component={Home} />
				{/* PROTECTED ROUTES GO HERE */}
				{this.state.authToken ?
				<>
					<Route path="/userdashboard" render={(props)=><UserDashboard {...props} userInfo={{...this.state}}/>} />
					<Route path="/company/dashboard" component={CompanyDashboard}  />
				</>
				:
				null}
			</div>
		</Router>
	);
  }

}

export default App;
