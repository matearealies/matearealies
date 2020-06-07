
import React, {useState, useGlobal } from 'reactn'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Fab, Slide, TextField, TextareaAutosize,  useMediaQuery } from '@material-ui/core'
import { Plus } from 'mdi-material-ui'
import { uuid } from '../../Utility/uuid'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  flex: {
    flex: 1,
  },
  textareaAutosize: {
    width: '100%'
  }
}))
   /*--,                              
  '  .' \            ,---,      ,---, 
 /  ;    '.        ,---.'|    ,---.'| 
:  :       \       |   | :    |   | : 
:  |   /\   \      |   | |    |   | | 
|  :  ' ;.   :   ,--.__| |  ,--.__| | 
|  |  ;/  \   \ /   ,'   | /   ,'   | 
'  :  | \  \ ,'.   '  /  |.   '  /  | 
|  |  '  '--'  '   ; |:  |'   ; |:  | 
|  :  :        |   | '/  '|   | '/  ' 
|  | ,'        |   :    :||   :    :| 
`--''           \   \  /   \   \  /   
                 `----'     `---*/          
export function Add (props) {
  const { spreadsheetId } = props
  const classes = useStyles();  
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  function authenticate() {
    return window.gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  // function loadClient() {
  //   window.gapi.client.setApiKey("YOUR_API_KEY");
  //   return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function materialize() {
    // window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
    // .then(() => {
    //   return window.gapi.client.sheets.spreadsheets.values.batchUpdate({
    //     "spreadsheetId": spreadsheetId,
    //     "resource": {
    //       "data": [
    //         {
    //           "values": [
    //             [
    //               "hello"
    //             ]
    //           ],
    //           "range": "A1"
    //         }
    //       ],
    //       "valueInputOption": "RAW"
    //     }
    //   })
    //       .then(function(response) {
    //               // Handle the results here (response.result has the parsed body).
    //               console.log("Response", response);
    //             },
    //             function(err) { console.error("Execute error", err); });
    // })
  }/*
 _     _  _    _|_ _ 
(/_>< (/_(_ |_| |_(/_
*/window.gapi.load("client:auth2", function() {
    window.gapi.auth2.init({client_id: "524121216771-vv0e5evrv7k59esgvp181p4tmqbvuvii.apps.googleusercontent.com"});
  });

  return (
    <>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={() => setOpen(true)}>
        <Plus />
      </Fab>
      <AddDialog 
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
      />
      
    </>
  )
}


function AddDialog (props) {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = useState(valueProp)
  const [gifs, setGifs] = useGlobal('gifs')
  const classes = useStyles()
  const [sector, setSector] = useGlobal('sector')
  const [LeveLUuid, setLeveLUuid] = useGlobal('LeveLUuid')
  const [spreadsheetId, setSpreadsheetId] = useGlobal('spreadsheetId')
  const [titleRange, setTitleRange] = useGlobal('titleRange')
  

  const change = (event) => {
    setValue(event.target.value);
  };

  const handleMaterialize = () => {   
    if (value) { 
      let gifs = value.split(',')
                      .filter(gif => gif.startsWith('["https://lh3'))
                      .map(gif => gif.replace(/(\["|")/g, '').replace(/(\r\n\t|\n|\r\t)/gm,""))
      setGifs(gifs);          
      setSector('level')                
      setLeveLUuid(uuid())
      handleUuidSheetInsert()
      onClose()
    }
  };

  const handleUuidSheetInsert = () => {
    return window.gapi.client.sheets.spreadsheets.values.append({
      "spreadsheetId": spreadsheetId,
      "range": "A1",
      "insertDataOption": "INSERT_ROWS",
      "valueInputOption": "RAW",
      "resource": {
        "values": [[uuid()]]
      }
    }).then(function(response) { // Handle the results here (response.result has the parsed body).
      let titleTableRange = response.result.tableRange.split(':')[1]
      console.log(titleTableRange)
      console.log(titleTableRange.slice(0, 1) + (Number(titleTableRange.slice(1)) + 1))
      setTitleRange(titleTableRange.slice(0, 1) + (Number(titleTableRange.slice(1)) + 1))
    },
    function(err) { console.error("Execute error", err); })
  } 



  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="md"
      fullWidth
      onEntering={() => {}}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Matter Realize</DialogTitle>
      <DialogContent dividers>
      <TextareaAutosize
        label='copy paste fractal matrix'
        rowsMin={17}          
        value={value}
        onChange={change}
        margin='normal'
        variant='outlined'        
        spellCheck='false'
        className={classes.textareaAutosize} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => onClose() } color="primary">
          Cancel
        </Button>
        <Button onClick={() => { handleMaterialize() }} color="primary">
          Materialize
        </Button>
      </DialogActions>
    </Dialog>
  )
}