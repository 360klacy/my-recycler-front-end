import React from 'react';
import axios from 'axios'
import {Redirect} from 'react-router'

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fullName : "", username: "", email : "", password : ""
    };
  }

  changeEmail = (e)=>{this.setState({email: e.target.value})}
  changeName = (e)=>{this.setState({fullName: e.target.value})}
  changePass = (e)=>{this.setState({password: e.target.value})}
  changeUsername = (e) =>{this.setState({username: e.target.value})}

  submitSignupForm = async (e)=>{
    let tmpState = {...this.state}
    e.preventDefault();
    //   let formValid = true; 
    //   for(let key in this.state){
    //       if((this.))
    const url = `${window.apiHost}/signup`
    let axiosResp = await axios.post(url,tmpState)
    this.setState({
        fullName: '', 
        username: '',
        email: '', 
        password:''
    })
    this.props.setToken(axiosResp.data.token)
    if(axiosResp.data.token){
        this.props.closeModal()
    }

      }

 
  
  render(){
      console.log('this props authToken in Signup ',this.props)
    //   this.props.authToken ? <Redirect to="/userdashboard" /> : null
    return(<>
            <div className="register-form">
                {/* <p className="form-msg">{this.state.msg}</p> */}
                <form onSubmit={this.submitSignupForm}>
                    <input required onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email Address" />
                    <input required onChange={this.changeName} value={this.state.name}  className="name-signup" placeholder='Full Name' />
                    <input required onChange={this.changeUsername} value={this.state.username}  className="username-signup" placeholder="Username" />
                    <input required type="password" onChange={this.changePass} value={this.state.password} className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Sign up</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Already have a Wasted account? <span onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                </form>
            </div> 
           </> )
  }
}
export default Signup;