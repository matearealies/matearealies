import React, { useState, useGlobal } from 'reactn'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardHeader, IconButton, Slider } from '@material-ui/core'
import { Toilet } from 'mdi-material-ui'

const useStyles = makeStyles(theme => ({   
    card: {
        minWidth: 200,
        minHeight: 234
    },    
    title: {
        fontSize: 14,
    },
}));

export function Watch (props) {
    const classes = useStyles();  
    const [markers, setMarkers] = useGlobal('markers')  
    const [selectedMarker, setSelectedMarker] = useGlobal('selectedMarker')

    const PrettoSlider = withStyles({
        root: {
          color: '#52af77',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        }
    })(Slider);
}
