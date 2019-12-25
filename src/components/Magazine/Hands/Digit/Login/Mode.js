import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { AccountSwitch, EarthBox, Matrix } from 'mdi-material-ui'
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));
  
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
  
export default function Mode() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
            <ListItemIcon>
              <EarthBox />
            </ListItemIcon>
            <ListItemText primary="Hell-0 World" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Matrix />
            </ListItemIcon>
            <ListItemText primary="Matrix" />
          </ListItem>          
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Switch account" />
          </ListItem>
          <ListItemLink>
            <ListItemText primary="Logout" />
          </ListItemLink>
        </List>
      </div>
    );
  }