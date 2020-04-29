import React, { useEffect, useState, useGlobal, useRef } from 'reactn'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Fab, Grid, Paper } from '@material-ui/core';
import { useFetch } from '../../hooks/'
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

export function Matrix(props) {
  const classes = useStyles();
  const [profileToken, setProfileToken] = useGlobal('profileToken')
  
  function execute() {
    return window.gapi.client.drive.files.list({})
        .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          let matrix = response.result.files.find(file => {
            return file.name === '23407 matrix'                      
          })
          // 23407 matrix found
          if (matrix) {
            return matrix
          } else { // create 23407

          }
          console.log(matrix)
        },
        function(err) { console.error("Execute error", err); });
  }

  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute2() {
    return window.gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": "1wCo0X9JV9n5dmx2LgN0UEgrwG_4Q6oejGpxPKEKTXMg",
      "range": "A1",
      "valueInputOption": "RAW",
      "resource": {
        "range": "A1",
        "values": [
          [
            12
          ]
        ]
      }
    })
    .then(function(response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
    function(err) { console.error("Execute error", err); });
  }
  
  if (profileToken) {
    execute().then((matrix) => console.log(matrix))
    return (
      <>
        <Fab className={classes.fab} color="primary" aria-label="add" onclick="activateLasers()">
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
      </>)
  }
  return (<>no</>)
  
}