import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routers from "./Routers"


ReactDOM.render(
    <MuiThemeProvider>
       <Routers />
    </MuiThemeProvider>   
    , document.getElementById('root'));
registerServiceWorker();
