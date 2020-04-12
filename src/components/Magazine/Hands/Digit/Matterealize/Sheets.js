import React, { useState, useEffect }  from 'react';
import TextField from '@material-ui/core/TextField'

export function Sheet () {
    const [name, setName] = useState('')
    function authenticate() {
        return window.gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
            .then(function(response) { 
                console.log(response)
                sessionStorage.setItem("WE", response)
                console.log("Sign-in successful"); 
            }, function(err) { console.error("Error signing in", err); });
    }
    function loadClient() {
        return window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
            .then(function() { 
                console.log("GAPI client loaded for API"); 
                execute() 
            }, function(err) { console.error("Error loading GAPI client for API", err); });
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
        return window.gapi.client.sheets.spreadsheets.create({
            "resource": {                
                "properties": {
                    "title": name
                },                
              }
              
        })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
    }
    window.gapi.load("client:auth2", function() {
        window.gapi.auth2.init({client_id: "1001750562670-13tl5gmis7taghhs2608c3rkkfs0ug46.apps.googleusercontent.com"});
    });
    
    return (
        <div>
            <TextField
                id="standard-full-width"
                style={{ 
                    margin: 8
                }}
                placeholder="Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                onKeyPress={(ev) => {
                    console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                        console.log(name)
                    // Do code here   
                    authenticate().then(loadClient)               
                    ev.preventDefault();
                    }
                }}
                onChange={event => setName(event.target.value)}
            />
        </div>
    )
}