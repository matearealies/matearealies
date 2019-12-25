import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { AccountKey  } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Fab, Popover, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import Mode from './Mode'

const useStyles = makeStyles(theme => ({        
    fab: {
        margin: theme.spacing(1)
    },
}))

export function Login(props) {    
    const classes = useStyles()
    const [profileImageUrl, setProfileImageUrl] = useState('')    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    function responseGoogle (response) {
        if (response) {
            setProfileImageUrl(response.profileObj.imageUrl)
        }
    }
    function onClick (event) {
        setAnchorEl(event.currentTarget);
        console.log('clicky lick')
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <GoogleLogin
            clientId="1001750562670-13tl5gmis7taghhs2608c3rkkfs0ug46.apps.googleusercontent.com"
            render={renderProps => ( profileImageUrl ? 
                <Fab color="primary" aria-label="matterealize" className={classes.fab} onClick={onClick}>
                    <Avatar src={ profileImageUrl } /> 
                </Fab> :
                <Fab color="primary" aria-label="matterealize" className={classes.fab} onClick={renderProps.onClick} disabled={renderProps.disabled} >
                    <AccountKey />
                </Fab>                            
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            scope={'https://www.googleapis.com/auth/spreadsheets'}
        />
        <Popover            
            open={open}
            anchorEl={anchorEl}
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
            <Mode />
        </Popover>
      </>
    )
}
