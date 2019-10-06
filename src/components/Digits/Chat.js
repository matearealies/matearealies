import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Fab, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mdiConsole } from '@mdi/js';
import Draggable from 'react-draggable';
import Icon from '@mdi/react';

function PaperComponent(props) {
    return (
      <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

const useStyles = makeStyles(theme => ({    
    fab: {
      margin: theme.spacing(1),
    },
    dialogContent: {
        width: 333
    }
}));

const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];

export function Chat (props) {
    const classes = useStyles();   
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (    
        <div>
            <Fab color="primary" aria-label="chat" className={classes.fab} onClick={handleClickOpen}>
                <Icon path={mdiConsole }
                    title="chat"
                    size={1}
                    color="red"
                />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Subscribe
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                <DialogContentText>
                    
                </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}