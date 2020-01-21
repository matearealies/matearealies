import React, { useState, useGlobal } from 'reactn'
import { GoogleLogin } from 'react-google-login'
import { AccountKey } from 'mdi-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import { Accountings } from './Accountings'
import { Avatar, Fab, Popover } from '@material-ui/core'

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
    const [token, setToken] = useGlobal('token')
    const open = Boolean(anchorEl);

    function responseGoogle (response) {        
        if (response) {
            setToken(response)
            setProfileImageUrl(response.profileObj.imageUrl)
            console.log(response)
        }
    }
    function onClick (event) {
        console.log('clicked here')
        setAnchorEl(event.currentTarget);
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
                <Accountings />
            </Popover>
        </>
    )
}
