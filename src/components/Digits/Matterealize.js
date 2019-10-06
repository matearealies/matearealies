import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Dialog, Fab, IconButton, Slide, TextField, Toolbar, Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiClose, mdiFirebase } from '@mdi/js';


const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    fab: {
      margin: theme.spacing(1),
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function Matterealize (props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChangeTextField = (event) => {
        setText(event.target.value);    
    }
    function handleSave () {
        return text.split(',')
            .filter(gif => gif.startsWith('["https://lh3'))
            .map(gif => gif.replace(/(\[\"|\")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,"").replace(/\]/g, ''))
        }
    return (
        <div>
            <Fab color="primary" aria-label="matterealize" className={classes.fab} onClick={handleClickOpen}>
                <Icon path={mdiFirebase}
                    title="matterealize mattereal"
                    size={1}
                    color="red"
                />
            </Fab>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <Icon path={mdiClose}
                        title="close"
                        size={1}
                    />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Matterealize
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        props.handleMatterealize(handleSave());
                        handleClose();
                    }}>
                    save
                    </Button>
                </Toolbar>
                </AppBar>
                <TextField id="outlined-full-width" label="Matterealize" style={{ margin: 8 }} placeholder="Paste html content"
                    margin="normal" variant="outlined" multiline rows="33" InputLabelProps={{ shrink: true }} 
                    onChange={handleChangeTextField}
                />
            </Dialog>
        </div>
    )
}