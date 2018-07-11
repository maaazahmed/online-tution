import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Register from "./register"
import SingInComponent from "./singIn"
import  { Route, Router } from "react-router-dom"


class LoginSingUpComponent extends Component{
  constructor(){
    super()
    this.state = {
      singIn_SingUp_flage:true
    }
  }

  singUp_Button(){
    this.setState({
      singIn_SingUp_flage:false
    })
  }

  singIn_Button(){
    this.setState({
      singIn_SingUp_flage:true
    })
  }

  render(){
    return(
      <div>
        <AppBar
           title={
            (this.state.singIn_SingUp_flage === true) ?
             <span>Login</span>
             :
             <span>Register</span>
           }
           showMenuIconButton={false}
           iconElementRight={
            (this.state.singIn_SingUp_flage === true) ? 
            <FlatButton onClick={this.singUp_Button.bind(this)} label="Register" />
            :
            <FlatButton onClick={this.singIn_Button.bind(this)} label="SingIn" />
          }
      />
       <div>
         {(this.state.singIn_SingUp_flage == false)?
            <Register/>
            :
           <SingInComponent/>
          } 
        </div>   
    </div>  

    );

  }
}
export default LoginSingUpComponent;