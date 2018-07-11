import React, { Component } from 'react';
import Deshboard_AppBar from "./dashbordAppBar"
// import SideNav from "./sideNav"
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import "./Style/style.css"
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Drawer from "./sidebar"
/**********************************************************/
class MyclassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  render() {
    return (
      <div >
          <Deshboard_AppBar />
        <div>
        </div>
        <div >
          <Drawer />
        </div>
      </div>
    );
  }
}

export default MyclassComponent;
