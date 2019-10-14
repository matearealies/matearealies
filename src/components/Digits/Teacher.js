import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiCharity } from '@mdi/js';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Draggable from 'react-draggable';

const useStyles = makeStyles(theme => ({    
    fab: {
      margin: theme.spacing(1),
    },
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
}));

export function Teacher (props) {
    const classes = useStyles();    
    const [values, setValues] = useState({
        ass: [],
        tits: [],
    });
    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick () {

    }

    function handleClose () {

    }
    return (        
        <div>
            <Fab color="primary" aria-label="teach her" className={classes.fab} onClick={handleClick}>
                <Icon path={mdiCharity }
                    title="teach her"
                    size={1}
                    color="red"
                />
            </Fab>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div> 
    );
}