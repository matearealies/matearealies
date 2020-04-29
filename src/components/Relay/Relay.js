import React, { useEffect, useState, useGlobal, useRef } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Paper } from '@material-ui/core';
import { useFetch } from '../../hooks'
import { Plus } from 'mdi-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  paper: {
    height: 345,
    width: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function execute() {
  return window.gapi.client.drive.files.list({})
      .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response.files);

      },
      function(err) { console.error("Execute error", err); });
}

export function Relay(props) {
  const classes = useStyles();
  
  // execute()
  return (
      <>
        <Fab className={classes.fab} color="primary" aria-label="add">
          <Plus />
        </Fab>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {[0, 1, 2, 3, 4 ].map((value) => (
                <Grid key={value} item>
                  <Card className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </>
  )
}

