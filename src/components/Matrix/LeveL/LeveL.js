import React, { memo } from 'reactn'
import Cover from './Cover'
import Grid from "./Grid"


export function LeveL (props) {
  
  /*
  _     _  _    _|_ _ 
 (/_>< (/_(_ |_| |_(/_
*/return (
    <>
      <Cover />
      <Grid />            
    </>
  )
}

export default memo(LeveL)