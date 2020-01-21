import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { IconButton } from "@material-ui/core"
import { ChevronLeft, ChevronRight } from 'mdi-material-ui'

const useStyles = makeStyles(theme => ({
    iconButton: {
        height: 45,
        width: 45
    }
}))                         
                                                                  /*-.                                 
           .---.  ,---,                 ,---,                   ,--.'|                         ___     
          /. ./|,--.' |              ,`--.' |               ,--,:  : |                       ,--.'|_   
      .--'.  ' ;|  |  :       ,---.  |   :  :            ,`--.'`|  ' :                       |  | :,'  
     /__./ \ : |:  :  :      '   ,'\ :   |  '  .--.--.   |   :  :  | |           ,--,  ,--,  :  : ' :  
 .--'.  '   \' .:  |  |,--. /   /   ||   :  | /  /    '  :   |   \ | :   ,---.   |'. \/ .`|.;__,'  /   
/___/ \ |    ' '|  :  '   |.   ; ,. :'   '  ;|  :  /`./  |   : '  '; |  /     \  '  \/  / ;|  |   |    
;   \  \;      :|  |   /' :'   | |: :|   |  ||  :  ;_    '   ' ;.    ; /    /  |  \  \.' / :__,'| :    
 \   ;  `      |'  :  | | |'   | .; :'   :  ; \  \    `. |   | | \   |.    ' / |   \  ;  ;   '  : |__  
  .   \    .\  ;|  |  ' | :|   :    ||   |  '  `----.   \'   : |  ; .''   ;   /|  / \  \  \  |  | '.'| 
   \   \   ' \ ||  :  :_:,' \   \  / '   :  | /  /`--'  /|   | '`--'  '   |  / |./__;   ;  \ ;  :    ; 
    :   '  |--" |  | ,'      `----'  ;   |.' '--'.     / '   : |      |   :    ||   :/\  \ ; |  ,   /  
     \   \ ;    `--''                '---'     `--'---'  ;   |.'       \   \  / `---'  `--`   ---`-'   
      '---"                                              '---'          `---*/                         
export function WhoIsNext(props) {
  const classes = useStyles();
    return (
        <>
            <IconButton aria-label="next" className={classes.iconButton} onClick={props.handleWIB}>
                <ChevronLeft />
            </IconButton>  
            {props.children}
            <IconButton aria-label="back" className={classes.iconButton} onClick={props.handleWIN}>
                <ChevronRight />
            </IconButton>            
        </>
    )
}