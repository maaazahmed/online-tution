
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import TextFieldIcon from 'material-ui-textfield-icon';
import ActionHome from 'material-ui/svg-icons/action/home';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Google_FB_Singin from "./googleFbSingin"


class SingInComponent extends Component {

    constructor(){
        super()
        this.state = {
            passwordIconHeandle:false,
            passwordTextFeildType:"password",
            FNameTextControl:false,
            LNameTextControl:false,
            emailTextControl:false,
            PassTextControl:false,
            firstName:"",
            lastName:"",
            Email:"",
            password:"",
        }
    }
   /*********************TEXT FIELD****************/ 
   /**********************SETUP********************/ 
    viseblePass(){
        this.setState({
            passwordIconHeandle:true,
            passwordTextFeildType:"text",
        })
    }

    inviseblePass(){
        this.setState({
            passwordIconHeandle:false,
            passwordTextFeildType:"password",
        })
    }

    emailShowError(){
       if(this.state.Email === "") {
       this.setState({
        emailTextControl:true
       })
      }

      else if(this.state.Email != null){
        this.setState({
            emailTextControl:false
        })
     }
    }

    firstShowError(){
        if(this.state.firstName === "") {
        this.setState({
            FNameTextControl:true
        })
       }

       else if(this.state.firstName != null){
        this.setState({
            FNameTextControl:false
        })
     }
     }
     

     lastNameShowError(){
        if(this.state.lastName === "") {
        this.setState({
            LNameTextControl:true
        })
       }

       else if(this.state.lastName != null){
         this.setState({
             LNameTextControl:false
         })
        }
     }

     passWordShowError(){
        if(this.state.password === "") {
        this.setState({
            PassTextControl:true
        })
       }
       
       else if(this.state.password != null){
            this.setState({
               PassTextControl:false
            })
        }
     }
   
     changeHandler(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
     }
   /*********************TEXT FIELD****************/ 
  /************************SETUP******************/ 

    
    singInButton(){
      //  console.log(this.state.password)
      alert()
    }


  render() {
   
    return (
      <div style={{margin:"0%", padding:"0%"}} >
        <div style={{
            width:340,
            margin:"0 auto",
            marginTop:"10%",
            }} >  
         <Card containerStyle ={{padding:0}}>
           <CardActions>
             <TextField
                 hintText="Email"
                 floatingLabelText="Email"
                 fullWidth={true}
                 id="my_email"
                 value={this.state.Email}
                 onBlur={this.emailShowError.bind(this)}
                 onChange={this.changeHandler.bind(this)}
                 name="Email"
                

                 errorText={(this.state.emailTextControl === false)?"": "Email is required"}
               />     
             <TextFieldIcon
                 hintText="Password" 
                 floatingLabelText="Password"
                 type={this.state.passwordTextFeildType}
                 fullWidth={true}
                 onChange={this.changeHandler.bind(this)}
                 onBlur={this.passWordShowError.bind(this)}
                 errorText={(this.state.PassTextControl === false)?"": "Password is required"}
                 value={this.state.password}
                 name="password"
                 icon={
                   (this.state.passwordIconHeandle === true ) ? 
                   <svg
                      onClick={this.inviseblePass.bind(this)}
                      fill="#00bcd4" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/>
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                    </svg>
                   :
                     <svg
                        onClick={this.viseblePass.bind(this)}
                        fill="#00bcd4" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>}                
               />     
                 <div  style={{marginTop:"5%"}} >
                   <RaisedButton
                      style={{marginLeft:"1.3%"}} 
                      label="Sing IN"
                      fullWidth={true}
                      onClick={this.singInButton.bind(this)}
                      primary={true}
                      />
                 </div> 
                   <Google_FB_Singin />
           </CardActions>
       </Card>
      </div>
    </div>
    );
  }
}

export default SingInComponent;
