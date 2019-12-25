import React, { useState, useGlobal } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiTeach, mdiFileExport } from "@mdi/js";
import { Fab, Menu, MenuItem } from "@material-ui/core";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import streamSaver from "streamsaver";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 200
  },
  fab: {
    margin: theme.spacing(1)
  },
  speedDial: {
    margin: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));
 /*________                     __                     
|  _   _  |                    [  |                    
|_/ | | \_|.---.  ,--.   .---.  | |--.  .---.  _ .--.  
    | |   / /__\\`'_\ : / /'`\] | .-. |/ /__\\[ `/'`\] 
   _| |_  | \__.,// | |,| \__.  | | | || \__., | |     
  |_____|  '.__.'\'-;__/'.___.'[___]|__]'.__.'[__*/
export function Teacher(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [lession, setLession] = useState("");
  const [markers, setMarkers] = useGlobal("markers");
  const [markerSize, setMarkerSize] = useGlobal("markerSize");
  const [open, setOpen] = React.useState(false);
  const [selectedMarker, setSelectedMarker] = useGlobal("selectedMarker");
  const handleClick = event => {
    if (markers) {
      markers.push({
        lession: "",
        height: 100,
        width: 100
      });
      setMarkers(markers);
    } else {
      setMarkers([
        {
          lession: "",
          height: 100,
          width: 100
        }
      ]);
    }
    // setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSelect = lession => {
    setLession(lession);
    setAnchorEl(null);
    if (markers) {
      markers.push({
        lession: lession,
        height: 100,
        width: 100
      });
      setMarkers(markers);
    } else {
      setMarkers([
        {
          lession: lession,
          height: 100,
          width: 100
        }
      ]);
    }
  };
  const onSave = () => {
    if (markers) {
      const fileStream = streamSaver.createWriteStream("teacher.giz", {
        size: 22, // (optional) Will show progress
        writableStrategy: undefined, // (optional)
        readableStrategy: undefined // (optional)
      });
      if (fileStream) {
        new Response(
          `{ 
                        "header": { 
                            "girl": "Ashlee Cox",
                            "event": "",
                            "type": "teacHer"
                        },     
                        "markers": ${JSON.stringify(markers)} 
                    }`
        ).body.pipeTo(fileStream);
      }
    }
    setOpen(false);
  };
  return (
    <div>
      <Fab
        color="primary"
        aria-label="matterealize"
        className={classes.fab}
        onClick={handleClick}
      >
        <Icon path={mdiTeach} title="Teach her" size={1} color="red" />
      </Fab>
      {/* <SpeedDial
                ariaLabel="TeacHer"
                className={classes.speedDial}
                icon={
                    <Icon path={mdiTeach }
                        title="teach her"
                        size={1}
                        color="red"/>
                }
                onClick={handleClick}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={"right"}>
                <SpeedDialAction                
                    key={"export"}
                    icon={
                        <Icon path={mdiFileExport }
                            title="export teacHer"
                            size={1}
                            color="red"/>
                    }
                    tooltipTitle={"export"}
                    onClick={onSave}/>            
            </SpeedDial>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}>
                <MenuItem onClick={() => handleSelect('Ass')}>Ass</MenuItem>
                <MenuItem onClick={() => handleSelect('Asshole')}>Asshole</MenuItem> 
                <MenuItem onClick={() => handleSelect('Creampie')}>Creampie</MenuItem>
                <MenuItem onClick={() => handleSelect('Cum')}>Cum</MenuItem>
                <MenuItem onClick={() => handleSelect('Cunt')}>Cunt</MenuItem>                
                <MenuItem onClick={() => handleSelect('Face')}>Face</MenuItem> 
                <MenuItem onClick={() => handleSelect('Flirt')}>Flirt</MenuItem> 
                <MenuItem onClick={() => handleSelect('Fuck')}>Fuck</MenuItem> 
                <MenuItem onClick={() => handleSelect('Gag')}>Gag</MenuItem> 
                <MenuItem onClick={() => handleSelect('Gape')}>Gape</MenuItem>                
                <MenuItem onClick={() => handleSelect('Hair')}>Hair</MenuItem>   
                <MenuItem onClick={() => handleSelect('Hand')}>Hand</MenuItem>   
                <MenuItem onClick={() => handleSelect('Hot')}>Face</MenuItem>                                           
                <MenuItem onClick={() => handleSelect('Heels')}>Heels</MenuItem>   
                <MenuItem onClick={() => handleSelect('Jackoff')}>Jackoff</MenuItem>   
                <MenuItem onClick={() => handleSelect('Lingerie')}>Lingerie</MenuItem>
                <MenuItem onClick={() => handleSelect('Mouth')}>Mouth</MenuItem>
                <MenuItem onClick={() => handleSelect('Pubes')}>Pubes</MenuItem>   
                <MenuItem onClick={() => handleSelect('Stockings')}>Stockings</MenuItem>
                <MenuItem onClick={() => handleSelect('Suck')}>Face</MenuItem> 
                <MenuItem onClick={() => handleSelect('Tits')}>Tits</MenuItem>
                <MenuItem onClick={() => handleSelect('Toilet')}>Toilet</MenuItem>
            </Menu> */}
    </div>
  );
}
