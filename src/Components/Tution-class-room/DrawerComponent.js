import React, { Component } from 'react';
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";
import ResponsiveAppBar from "./Drawer/ResponsiveAppBar";
import BodyContainer from "./Drawer/BodyContainer";

import { Provider } from "react-redux"
import store from "./Drawer/store/index"

class Drawer extends Component {
  render() {
    return (
      <Provider store={store} >
       <div>
         <ResponsiveDrawer />
       </div>        
      </Provider>
      
    );
  }
}

export default Drawer;
