import React, { useState, useGlobal } from 'reactn'
import { GoogleLogin } from 'react-google-login'
import { AccountKey } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import { Account } from './Account'
import { Avatar, Button, Popover } from '@material-ui/core'

const useStyles = makeStyles(theme => ({        
    fab: {
        margin: theme.spacing(1)
    },
    popover: {
        height: '33%'
    }
})) /*             _    
   / /  ___  ___ _(_)__ 
  / /__/ _ \/ _ `/ / _ \
 /____/\___/\_, /_/_//_/
           /__*/        
export function Login(props) {    
    const classes = useStyles()
    const [profileImageUrl, setProfileImageUrl] = useState('')  
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileToken, setProfileToken] = useGlobal('profileToken')
    const [sector, setSector] = useGlobal('sector')
    const open = Boolean(anchorEl);

    function responseGoogleSuccess (response) {  
        if (response) {
            console.log(response)
            setProfileToken(response)
            setSector('comms')
            // setProfileImageUrl(response.profileObj.imageUrl)
            
        }
    }
    function responseGoogleFail (response) {
        console.log('error: ', response)
    }
    function onClick (event) {
        console.log('clicked here')
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    function authenticate() {        
        return window.gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
            .then(function(response) { setProfileToken(response); console.log("Sign-in successful"); },
                  function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
        window.gapi.client.setApiKey("AIzaSyCEmxFXur3r9rQhcVDxeQ7mUI_UH1XLqpk");
        return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
            .then(function() { 
                console.log("GAPI client loaded for API"); 
                let auth2 = window.gapi.auth2.getAuthInstance();
                console.log("is signed in", auth2.isSignedIn.get())
        },
        function(err) { console.error("Error loading GAPI client for API", err); });
    }        
    window.gapi.load("client:auth2", function() {
        
        window.gapi.auth2.init({client_id: "524121216771-vv0e5evrv7k59esgvp181p4tmqbvuvii.apps.googleusercontent.com"});
        
    });


    if (profileToken) {
        return (
            <>
                <Avatar src={ profileToken.Pt.QK } onClick={ onClick} /> 
                <Popover            
                    open={open}
                    anchorEl={anchorEl}
                    className={classes.popup}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >                      
                    <Account />
                </Popover>
            </>
        )
    } else {

        return (<Button onClick={ () => { authenticate().then(loadClient) } }>Login</Button>)
    }
    // return (
    //     if (profileToken) {
    //         <Avatar src={ profileToken.Pt.QK } onClick={ onClick} />  
    //     }
    //     <>

    //         <Button onClick={ () => { authenticate().then(loadClient) } }>Login</Button>            
    //         <GoogleLogin 
    //             clientId="1081852196445-oi3o2ct3b4t5fca4peqiffkuqb7pr5ji.apps.googleusercontent.com"
    //             render={renderProps => ( profileToken ? 
    //                 <Avatar src={ profileToken.Pt.QK } onClick={ onClick} />   :
    //                 <Button color="primary" onClick={renderProps.onClick} >Login</Button>
    //             )}
    //             onSuccess={responseGoogleSuccess}
    //             onFailure={responseGoogleFail}
    //             cookiePolicy={'single_host_origin'}
    //             scope={'https://www.googleapis.com/auth/spreadsheets'}
    //             isSignedIn={true}
    //         />
    //         <Popover            
    //             open={open}
    //             anchorEl={anchorEl}
    //             className={classes.popup}
    //             onClose={handleClose}
    //             anchorOrigin={{
    //                 vertical: 'bottom',
    //                 horizontal: 'center',
    //             }}
    //             transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'center',
    //             }}
    //         >                      
    //             <Account />
    //         </Popover>
    //     </>
    // )
}
