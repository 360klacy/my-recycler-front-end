import React from 'react';
import axios from 'axios'

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '', email: '', password: ''
    };
  }
  handleFormEmail = (e)=>{
    console.log(e.target.value)
    this.setState({
        email:e.target.value
    })
    }
  handleFormName = (e)=>{
    console.log(e.target.value)
    this.setState({name:e.target.value})
    }

  handleFormPassword = (e)=>this.setState({password:e.target.value})


  submitSigninForm = async (e) =>{
    e.preventDefault()
    console.log(this.state)
    let url = `${window.apiHost}/users/signup`
    console.log(url)
    let resp = await axios.post(url,this.state)
    console.log('resp', resp)
  }

  render(){
    return(<>
<div className="row">
    <form onSubmit={this.submitSigninForm}className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="name" value={this.state.name} onChange={this.handleFormName}type="text" className="validate" />
          <label htmlFor="email">Name</label>
        </div>
        <div className="input-field col s12">
          <input id="email" value={this.state.email} onChange={this.handleFormEmail}type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" defaultValue={this.state.password} onChange={this.handleFormPassword} type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <button>submit</button>
    </form>
</div>

    </>)
  }
}

export default SignIn;