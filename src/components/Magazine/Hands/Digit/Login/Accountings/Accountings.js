import React, { useEffect, useGlobal } from 'reactn'
import { GoogleLogin } from 'react-google-login'
import { Avatar, Grid, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({        
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))

export function Accountings(props) {
    const [token, setToken] = useGlobal('token')    
    const classes = useStyles()
    useEffect(() => {
        if (token) {
            fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token.Zi.id_token}`)
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    console.log(myJson);
                });
        }        
    });
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={5}>     
                    
                </Grid>
                <Grid item xs={2}>     
                    <Avatar alt="Remy Sharp" src={token.profileObj.imageUrl} className={classes.large} />       
                </Grid>
                <Grid item xs={5}>     
                    
                </Grid>
                <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Grid>            
        </>
    )
}
