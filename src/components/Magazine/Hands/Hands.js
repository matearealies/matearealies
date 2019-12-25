import React, { useState } from 'react'
import { Divider, IconButton, SwipeableDrawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight, MenuOpen } from 'mdi-material-ui'
import { Matterealize, Terminal } from './Digit'
import { Login } from './Digit/Login/Login'
import { Teacher, Watcher } from './Digit/Teacher'
/*SSS SSSSS                                                    
SSSSS SSSSS .sSSSSs.    .sSSSs.  SSSSS .sSSSSs.    .sSSSSSSSs. 
S SSS SSSSS S SSSSSSSs. S SSS SS SSSSS S SSSSSSSs. S SSS SSSS' 
S  SS SSSSS S  SS SSSSS S  SS  `sSSSSS S  SS SSSSS S  SS       
S..SSsSSSSS S..SSsSSSSS S..SS    SSSSS S..SS SSSSS `SSSSsSSSa. 
S:::S SSSSS S:::S SSSSS S:::S    SSSSS S:::S SSSSS .sSSS SSSSS 
S;;;S SSSSS S;;;S SSSSS S;;;S    SSSSS S;;;S SSSSS S;;;S SSSSS 
S%%%S SSSSS S%%%S SSSSS S%%%S    SSSSS S%%%S SSSS' S%%%S SSSSS 
SSSSS SSSSS SSSSS SSSSS SSSSS    SSSSS SSSSSsS;:'  SSSSSsSSS*/                               
function Hands (props) {
    
    const [state, setState] = useState({        
        left: false,        
        right: false,
    });
    const theme = useTheme();
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
    };

    function handleMatterealize(load) {
        if (load) {
          props.handleLoad(load)
        }
    }
    
    function handleTeacHer(lession) {
        if (lession) {
            props.handleTeacHer(lession)
        }
    }
    
    const useStyles = makeStyles(theme => ({
        root: {
            position: 'relative',
        },
        list: {
            width: 250,
        },       
        fabRight: {
            position: 'absolute',
            top: theme.spacing(2),            
            right: theme.spacing(2),
            zIndex: 2
        },      
        fabLeft: {
            position: 'absolute',
            top: theme.spacing(2),
            left: theme.spacing(2),
            zIndex: 2
        },   
        iconFlipped: {
            '-o-transform': 'scaleX(-1)',
            '-moz-transform': 'scaleX(-1)',
            '-webkit-transform': 'scaleX(-1)',
            '-ms-transform': 'scaleX(-1)',
            transform: 'scaleX(-1)'
        }              
    }))
    const classes = useStyles()
    return (
        <>   
            <IconButton className={classes.fabLeft} onClick={toggleDrawer('left', true)}>
                <MenuOpen className={classes.iconFlipped} fontSize={'large'}/>
            </IconButton> 
            <IconButton className={classes.fabRight} onClick={toggleDrawer('right', true)}>
                <MenuOpen fontSize={'large'}/>
            </IconButton> 
            <SwipeableDrawer
                open={state.left}
                variant="persistent"
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer('left', false)}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight /> }
                    </IconButton>
                </div>
                <Divider />
                <Watcher />    
            </SwipeableDrawer>  
            <SwipeableDrawer
                anchor="right"                
                open={state.right}
                variant="persistent"
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer('right', false)}>
                        {theme.direction === 'ltr' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <Login />
                <Matterealize handleMatterealize={handleMatterealize} handleTeacHer={handleTeacHer} />
                <Terminal />
                <Teacher />
            </SwipeableDrawer>              
        </>
    )
       
}
         
export default Hands                               
                                             
                                             