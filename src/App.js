import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import NavBar from "./Component/NavBar/NavBar";
import UserDashboard from './Component/UserDashboard/UserDashboard';
import CompanyDashboard from './Component/CompanyDashboard/CompanyDashboard';
import Unauth from './Component/Auth/Unauth';

class App extends React.Component{
	constructor(props){
		super(props)
	this.state ={
		authToken : null, name : null, email: null, id: null, isCompany: null
	}
	}
	componentDidMount(){
		console.log('initial state', this.state)
		let sessionState = JSON.parse(window.sessionStorage.getItem('state'))
		console.log("=====",sessionState)
		if(sessionState){
			this.setState({
				authToken : sessionState.token,
				name :sessionState.name,
				id: sessionState.id, 
				email: sessionState.email,
				isCompany: sessionState.is_company
			})
		} else {console.log('this is empty')
			}
	}
	_setToken=(authToken,name,email, id, isCompany)=>{
		this.setState({
			authToken,
			name,
			email, 
			id,
			isCompany

		})
	}
	_logout = ()=>{
		window.sessionStorage.removeItem('state')
		this.setState({
			authToken: null
		})
	}
	//condidtional rendring. 
	render(){
  return (
		<Router>
			<div className="App">

  				<Route path="/" render={(props)=><NavBar {...props} userInfo={{...this.state}} setToken={this._setToken} logout={this._logout}/> }/>
				<Route exact path="/" component={Home} />
				{/* PROTECTED ROUTES GO HERE */}
				{	(this.state.authToken)&&(this.state.isCompany===true)?
						<Route path="/company/dashboard" render={(props)=><CompanyDashboard {...props} userInfo={{...this.state}}/>} />
					:
					(this.state.authToken) ?
						<Route path="/userdashboard" render={(props)=><UserDashboard {...props} userInfo={{...this.state}}/>} />
					: null
			}
			</div>
		</Router>
	);
  }

}

export default App;
