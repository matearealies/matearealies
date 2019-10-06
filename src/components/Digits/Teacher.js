import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiCharity } from '@mdi/js';

const useStyles = makeStyles(theme => ({    
    fab: {
      margin: theme.spacing(1),
    },
}));

export function Teacher (props) {
    const classes = useStyles();    
    

    return (        
        <div>
            <Fab color="primary" aria-label="teach her" className={classes.fab} onClick={props.handleClick}>
                <Icon path={mdiCharity }
                    title="teach her"
                    size={1}
                    color="red"
                />
            </Fab>
        </div> 
    );
}