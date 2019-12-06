import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { AccountKey  } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Fab } from '@material-ui/core'
import { motion } from 'framer-motion'
const useStyles = makeStyles(theme => ({    
    root: {
        color: '#fff',
        fontSize: '32px',
        fontFamily: 'PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontWeight: 200,
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    box: {
        // width: props.marker.width,
        // height: props.marker.height,
        // borderRadius: '100%',
        background: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        position: 'absolute', 
        
        // left: props.marker.offsetX,
        // top: props.marker.offsetY,           
        zIndex: 1,
        opacity: 0.5,
        filter: 'alpha(opacity=50)' /* For IE8 and earlier */,
        
    },
    fab: {
        margin: theme.spacing(1)
    },
}))

export function Login(props) {    
    const classes = useStyles()
    const [profileImageUrl, setProfileImageUrl] = useState('')

    function responseGoogle (response) { 
        console.log(response)      
        setProfileImageUrl(response.profileObj.imageUrl)
    }
    return (

        
        <GoogleLogin
            clientId="1001750562670-13tl5gmis7taghhs2608c3rkkfs0ug46.apps.googleusercontent.com"
            render={renderProps => (
                <Fab color="primary" aria-label="matterealize" className={classes.fab} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    {profileImageUrl ? <Avatar src={ profileImageUrl } /> : <AccountKey />}
                </Fab>            
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            scope={'https://www.googleapis.com/auth/spreadsheets'}
        />
    )
}
