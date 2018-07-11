import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Sidebar from 'react-sidebar'
import SideNav from "./sideNav"
import Deshboard_AppBar from "./dashbordAppBar"
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextFieldExampleSimple from "./create-class-form"
import "./Style/style.css"



class SideBar extends Component {
    constructor(props) {
        super(props);
        console.log(props.toggleSideBar);
        this.state = {
            value: null
        };

    }

    render() {
        return (
            <div>
                <div className='sideBar'>
                    <List>
                        <div className='icons'>
                            <IconButton onClick={this.props.toggleSideBar} >
                                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                                </svg>
                            </IconButton>
                            <IconButton>
                                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                            </IconButton>
                            <IconButton>
                                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </IconButton>
                            <IconButton>
                                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                                </svg>
                            </IconButton>
                            <IconButton>
                                <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </IconButton>
                        </div>
                    </List>
                </div>
            </div>
        )
    }
}

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true,
            num: 50
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        let classes = []
        for (var i = 0; i < this.state.num; i++) {
            classes.push(
                <Card key={i} style={{ marginBottom: 5 }}>
                    <CardText onClick={() => { this.setState({ num: this.state.num + 3 }) }} expandable={false}>
                        <h2>Class {i + 1}</h2>
                    </CardText>
                </Card>
            )
        }
        var sidebarContent = <b >Sidebar content</b>;
        return (
            <div>
                <Sidebar
                    sidebarClassName="classDiv"
                    rootClassName="rootClassName"
                    style={{
                        // position: "absolute",
                        // top:" 64px",
                        // left: "0px",
                        // right:" 0px",
                        // bottom: "0px",
                        // overflow: "hidden",
                    }}
                    // contentClassName={

                    // }
                    sidebar={
                        <div >
                            <Card style={{ marginBottom: 10 }}>
                                <CardText expandable={false}>
                                    <h2>Online tution center</h2>
                                </CardText>
                            </Card>
                            {classes}
                        </div>
                    }
                    docked={this.state.sidebarOpen}>
                    <SideBar toggleSideBar={this.onSetSidebarOpen} />
                    <div className="create-class-div" >
                        <Card className="create-class" >
                            <CardActions>
                                <TextFieldExampleSimple />
                            </CardActions>
                        </Card>
                    </div>
                </Sidebar>
            </div>
        )
    }
}




// onClick={this.props.toggleSideBar}


