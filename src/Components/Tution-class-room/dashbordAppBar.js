import React, {Component} from 'react';
import "./Style/style.css"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import history from "../../History"
/***********************************************/


const Logged = (props) => (
 <div>  
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton style={{marginRight:50}} ><MoreVertIcon color="#fff" /></IconButton>
    }
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}>
    <MenuItem primaryText="Dashboard"
     rightIcon={
        <svg fill="gray" height="24" 
        viewBox="0 0 24 24" width="24" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
           <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
    } />
    <MenuItem primaryText="Create class"
       rightIcon={
        <svg fill="gray"
         height="24"
          viewBox="0 0 24 24" 
          width="24"
           xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
       }
     />
    <MenuItem primaryText="Classes"
       rightIcon={

      <svg version="1.1" fill="gray"  height="2" width="2" id="Capa_1" xmlns="http://www.w3.org/2000/svg"xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 937 937" style="enable-background:new 0 0 937 937;" space="preserve">
        <g>
       <path d="M513.1,360.85c5.601,0,11,0.9,16.2,2.4l97-118.9c6.2-7.6,17.7-9,25.2-2.6c7.3,6.1,8.3,17,2.2,24.4l-95.9,117.6
         c6.5,9,10.4,20.101,10.4,32.101c0,22.3-13.4,41.6-32.5,50.199H912c13.8,0,25-11.199,25-25v-316.5c0-13.8-11.2-25-25-25H434
         c-13.8,0-25,11.2-25,25v207.8l22.6,28.6h81.5V360.85z"/>
       <circle cx="201.3" cy="121.85" r="102.4"/>
       <g>
         <path d="M306.3,892.55c0,13.801-11.2,25-25,25h-42c-13.8,0-25-11.199-25-25v-209.6c0-7.4-6-13.4-13.4-13.4l0,0
           c-7.4,0-13.4,6-13.4,13.4v208.6c0,14.301-11.7,26-26,26h-41.1c-13.8,0-25-11.199-25-25l-0.2-506c0-6.8-5.5-12.399-12.4-12.399l0,0
           c-6.8,0-12.4,5.5-12.4,12.399V581.15c0,13.8-11.2,25-25,25H25c-13.8,0-25-11.2-25-25v-266.8c0-31.7,25.7-57.3,57.3-57.3H285
           c24.399,0,47.5,11.2,62.7,30.3l61.199,77.2l12.9,16.3c0,0,58,0,91.4,0.1c13.8,0,25,11.2,25,25v19.9c0,13.8-11.2,25-25,25H405
           c-10.7,0-20.8-4.9-27.4-13.301l-45.6-58.6c-2.3-3-6-4.8-9.8-4.8H319.1c-6.8,0-12.399,5.5-12.399,12.399L306.3,892.55z"/>
        </g>
       </g>
     </svg>}/>

     <MenuItem
      onClick={()=>{
       localStorage.removeItem("aouthToken")
       history.push("/login")}
      }
      primaryText="Sing uot"
       rightIcon={
          <img
           style={{height:20, 
            width:20
          }}
            src="http://www.avsevent.com/bluadmin/images/icons/icon-logout-g.png" />
       }/>
      </IconMenu>
 </div> 
);

Logged.muiName = 'IconMenu';
export default class Deshboard_AppBar extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  rightButtons = (
    <div >
      <Logged/>
     </div>
  );

  letElemnt=(
     <div>
        <List>
         <ListItem
          style={{
            marginTop:-10,
          }}
          disabled={true}
          rightAvatar={
          <Avatar
           size={50}
           src="https://scontent.fkhi4-1.fna.fbcdn.net/v/t1.0-1/c20.0.160.160/p160x160/16807099_168463856989761_5749670252778263859_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHlZpsNOVdaNk3MnF7iH-qqQyrTR91tkSFnZOCH9_Xn7IlrSL1mtl0LFraAcCxuqa4_D52OWndoN9J7dPPmcehVUOwozuAtoWK_DxYIAaCNRbJ5dA-1-CH9xYlTfMzUX1U&oh=08ac920399c925b1a6986a088286ee91&oe=5B6D2959" />
          }>
          <div style={{color:"#fff",fontSize:20,marginTop:7,marginLeft:-16}} >
            Dashboard
          </div>
          
        </ListItem>
    </List>
    

        </div>       
             
         )

  render() {
    return (
        <AppBar
         style={{
            position: "absolute",
            top:"0px" ,
            boxShadow:"none",

        }} 
        title={ this.letElemnt }
          showMenuIconButton={false}
          iconElementRight={ 
            this.rightButtons
           }/>
    );
  }
}
