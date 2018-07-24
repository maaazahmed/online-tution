import React, { Component } from 'react';
import Deshboard_AppBar from "./dashbordAppBar"
import "./Style/style.css"
import Drawer from "./sidebar"
import history from "../../History"

/**********************************************************/
class MyclassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  componentWillMount() {
    let checkAouth = localStorage.getItem("aouthToken")
    if (checkAouth === null) {
      history.push("/")
    }
  }
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
