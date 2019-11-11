import React, { useEffect, useGlobal } from 'reactn';
import { makeStyles } from '@material-ui/core/styles';
import posed from 'react-pose';


 /*:=======  :::====  :::====  :::  === :::===== :::==== 
 ::: === === :::  === :::  === ::: ===  :::      :::  ===
 === === === ======== =======  ======   ======   ======= 
 ===     === ===  === === ===  === ===  ===      === === 
 ===     === ===  === ===  === ===  === ======== ===  =*/                                                                                                                
export function Marker(props) {
    console.log('alens')
    const Box = posed.div({
        draggable: true,
        init: { scale: 1 },
        // alignItems: 'center',
        // drag: { scale: 1.1 },
        // dragEnd: { scale: 1 },
        
    })
    
    const Label = posed.span({
        init: { color: '#000' },
        drag: { color: '#f00' }                               
    })

    const useStyles = makeStyles(theme => ({    
        root: {
            color: '#fff',
            fontSize: '32px',
            fontFamily: 'PT Sans, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            fontWeight: 200,
            textShadow: '2px 2px 0px rgba(0, 0, 0, 0.2)',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        },
        box: {
            width: props.marker.width,
            height: props.marker.height,
            borderRadius: '100%',
            background: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            position: 'absolute', 
            
            // left: props.marker.offsetX,
            // top: props.marker.offsetY,           
            zIndex: 1,
            opacity: 0.5,
            filter: 'alpha(opacity=50)' /* For IE8 and earlier */,
            
        }
    }))
    const { id, image, selected } = props
    const classes = useStyles()
    const [selectedMarker, setSelectedMarker] = useGlobal('selectedMarker')
    const [markers, setMarkers] = useGlobal('markers')
    // 23407-1337
    // >3407-1337
    
    

    function onDragEnd(event) {              
        const marker = markers[id]
        marker.id = id
        marker.pageX = event.pageX
        marker.pageY = event.pageY
        marker.image = image
        setSelectedMarker(id)        
    }
    
    return (
        // <DraggableCircle r={3} />
        <Box 
            className={classes.box} 
            id={id} 
            style={{ 
                borderStyle: selected ? 'solid' : 'none', 
                borderColor: '#e91e63', 
                left: props.marker.pageX - (props.marker.width/2), 
                top: props.marker.pageY - (props.marker.height/2) }} 
            onDragEnd={onDragEnd}>
            <Label className="label">{props.marker.lession}</Label>
        </Box>

    )
}