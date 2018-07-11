import React from "react";
import { Router, Route } from "react-router-dom"  
import history from "./History"
import LoginSingUpComponent from "./Components/SingIn-and-singUp"
import MyclassComponent from "./Components/Tution-class-room/my-class"
import AllclassComponent from "./Components/Tution-class-room/all-classes"
// import Drawer from "./Components/Tution-class-room/index"



const Routers = ()=>{
    return(
        <Router history={history} >
          <div>
             <Route exact path="/" component={LoginSingUpComponent} /> 
             <Route exact path="/my-class" component={MyclassComponent} /> 
             <Route exact path="/all-classes" component={AllclassComponent} /> 
          </div>
        </Router>
    )
}

export default Routers