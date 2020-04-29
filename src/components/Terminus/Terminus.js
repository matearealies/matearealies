import React, { useEffect, useState, useGlobal, useRef } from 'reactn'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Avatar, Button, CssBaseline, Divider, Drawer, Fab, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import clsx from 'clsx';
import { AccessPointNetwork, ChevronLeft, ChevronRight, Creation, Inbox, LoginVariant, Mail, Menu } from 'mdi-material-ui';
import { Login } from './Login/'
import { Relay } from '../Relay/'
import { Matrix } from '../Matrix/'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  brandText: {
    flexGrow: 1,
    fontFamily: 'monospace',
    whiteSpace: 'pre'
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(7),    
    padding: theme.spacing(3)
  },  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    color: 'darkslateblue'
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    marginTop: theme.spacing(7)
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },  
}));

function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);    
  const [sector, setSector] = useState('');

  const [profileToken, setProfileToken] = useGlobal('profileToken')
  const handleDrawerOpen = () => { setOpen(true) }
  const handleDrawerClose = () => { setOpen(false) }  
  

  function Options() {
    if (profileToken) {
      return (<>
      <List>
        <ListItem button key='relay' onClick={() => setSector('relay')}>
          <ListItemIcon><AccessPointNetwork/></ListItemIcon>
          <ListItemText primary="Relay" />
        </ListItem>
      </List>        
      <Divider />
      <List>
        <ListItem button key='matrix' onClick={() => setSector('matrix')}>
          <ListItemIcon><Creation/></ListItemIcon>
          <ListItemText primary="Matrix" />
        </ListItem>
      </List>
      </>);
    }
    return <></>;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>
          <Typography
              className={classes.brandText}
              color="primary">       
               __    _   ___/   ___/               _                         <br/>
               |\   |  .'  /\ .'  /\   ____ \,___, /        ___  .___    ___ <br/>
               | \  |  |  / | |  / |  (     |    \ |,---. .'   ` /   \ .'   `<br/>
               |  \ |  |,'  | |,'  |  `--.  |    | |'   ` |----' |   ' |----'<br/>
               |   \|  /`---' /`---' \___.' |`---' /    | `.___, /     `.___,<br/>
                                            \                                 
          </Typography>                                                                                                                                                 
          <IconButton color="primary" className={classes.fab} >
            <LoginVariant />  
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.spacer} />
        <Divider />
        <Options />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />        
          {sector === 'relay' && <Relay />} 
          {sector === 'matrix' && <Matrix />}        
      </main>
    </div>
  );
}

export function Terminus(props) {
    return (
        // <ButtonAppBar />
        <MiniDrawer />
    )
}
