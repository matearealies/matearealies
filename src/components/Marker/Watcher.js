import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Popper,
  Slider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  },
  card: {
    minWidth: 200,
    minHeight: 234
  },
  title: {
    fontSize: 14
  }
}));

export function Watcher(props) {
  const classes = useStyles();
  const [anchorElWatcher, setAnchorElWatcher] = React.useState(
    props.anchorElWatcher ? props.anchorElWatcher : null
  ); // React.useState(null);

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);
  function handleChangeHeight(event, value) {
    // const marker = markers[selectedMarker];
    // marker.height = value;
    // setMarkers(markers);
  }

  function handleChangeWidth(event, value) {
    // const marker = markers[selectedMarker];
    // marker.width = value;
    // setMarkers(markers);
  }

  function handleToylet(event) {
    // setMarkers(markers.filter(marker => marker.id !== selectedMarker));
    // setSelectedMarker(undefined);
  }
  let open = false;
  open = Boolean(props.anchorElWatcher);
  const id = open ? "simple-popper" : undefined;
  console.log(open, props.anchorElWatcher);
  return (
    <div>
      <Popper
        id={id}
        open={open}
        anchorEl={props.anchorElWatcher ? props.anchorElWatcher : null}
      >
        <Card className={classes.card}>
          <CardContent>
            {/* <Tag /> */}
            height
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              //defaultValue={marker ? marker.height : 100}
              max={600}
              onChangeCommitted={handleChangeHeight}
            />
            width
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              //defaultValue={marker ? marker.width : 100}
              max={600}
              onChangeCommitted={handleChangeWidth}
            />
          </CardContent>
        </Card>
        <div className={classes.paper}>The content of the Popper.</div>
      </Popper>
    </div>
  );
}
