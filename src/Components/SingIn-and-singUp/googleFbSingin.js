import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


class Google_FB_Singin extends Component {
  render() {
    const iconStyles = {
        marginRight: 0,
      };

      const styles = {
        button: {
          margin: 12,
        },
        exampleImageInput: {
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: '100%',
          opacity: 0,
        },
      };
    return (
         <div >
            <div style={{
                marginLeft:"1.6%",
                width:"97%",
                marginTop:"5%",
                marginBottom:"2%"
              }} >
              <RaisedButton
                label="Facebook"
                style={styles.button}
                labelColor="#fff"
                buttonStyle={{
                   backgroundColor:"#3F51B5",
                }}
                style={{
                  width:"48%",
                }}
                icon={
                  <svg fill="#fff"
                    xmlns="http://www.w3.org/2000/svg" 
                    xlink="http://www.w3.org/1999/xlink"
                    version="1.1" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path d="M17,2V2H17V6H15C14.31,6 14,6.81
                      14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                    </svg>
                    }
                  />
                
                 <RaisedButton
                    label=" google "
                    style={styles.button}
                    labelColor="#fff"
                    buttonStyle={{
                        backgroundColor:"#ca4439",
                    }}
                    style={{
                      width:"46%",
                      marginLeft:"6%"
                    }}
                    icon={
                      <svg style="width:24px;height:24px"  
                        height="24" width="24" viewBox="0 0 24 24">
                      <path fill="#fff" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
                      </svg>
                    }
                  />
                 </div>         
             </div>
            );
       }
}

export default Google_FB_Singin;
