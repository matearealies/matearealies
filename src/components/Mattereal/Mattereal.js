import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { Cookie } from './Cookie'

const propTypes = {
  src: PropTypes.string.isRequired,  
}
const defaultProps = {
  src: "https://lh3.googleusercontent.com/_1whFm6BwCQvIzSf-dn5oTmjz6QycDaLluhsBUSsUiwp84NnlflD_S4AVVt-CIQi2rWIHthJvqO-s8X2WA-bdBL2v5N1sxisI6-fDPvsPCZO9dxRc7scH-xBkKBIwIE6uRL6iOtxNHCqSaYUJomqf27rRFFEIEDune9pmBOwC1a6-77t9IWeIt7MM-SimbLChfTzJc9ILu6okMkHyeGyT8Q6vLUkVAx2HQq-Wtx_RAfz8uGV6C2Wx0qSA-lzyz4y0HB-vOWGC6HVXfE41iv1MgblqQg846WzEzK3JPRRSEWDXjHSPn8rQ7gHfQvkUd9ilzSrBJBpUnhPtg9_G94_VbZ4sNtcAQF85G0_k0vgAu3BDTbrU02lifxfXtwud19JdAfV4clVQUX2t4tTA_zdIqcxsbn1T-vWpfyN-E5gYk3VpSxTwJmh7_jZ_0mVEUtUZ8xup4Vdi9gFfidLmuEuJnt_JhyFqNp244CZHmQpTCZa4EgEwMZDH4w_6PMp7uz1aaXpMTHhlh0A6k-2I5acNvFxgsm6J3fIeUD_QRV4fKOKIiL0WH2wxrcaBZDMrMPUcHZmGp_zV5KTiSJ1gOozryZdzj3-GzH9KDTEGJpV4y1sTnkczjbCuCUGdrX-GrRPZCRzOYUl4n_0PDW7425ErbZ3IpVFgffN2qEMAg9gVYN_KZFqmF0-sVCgjep1lOjMhUwZKzmxyAnuGV42ZtL7EuwQhQ"
}
const useStyles = makeStyles({
  card: {
    width: 'auto',
    height: '100vh', pointerEvents: 'auto'
  },
})                                                                        /*b 
                           d8P     d8P                                    88P 
                        d888888Pd888888P                                 d88  
  88bd8b,d88b  d888b8b    ?88'    ?88'   d8888b  88bd88b d8888b d888b8b  888  
  88P'`?8P'?8bd8P' ?88    88P     88P   d8b_,dP  88P'  `d8b_,dPd8P' ?88  ?88  
 d88  d88  88P88b  ,88b   88b     88b   88b     d88     88b    88b  ,88b  88b 
d88' d88'  88b`?88P'`88b  `?8b    `?8b  `?888P'd88'     `?888P'`?88P'`88b  8*/
export function Mattereal(props) {
  const { load } = props;
  const [idx, setIdx] = useState(0)
  const classes = useStyles();
  return (
    <>
      <Grid container justify = "center" style={{ position: 'fixed', pointerEvents: 'none'}} >
        <Cookie>
          <Card >
          <CardActionArea>
            <CardMedia 
              className={classes.card}
              component="img"
              alt="gift"
              image={load[idx]}
              onClick={(e) => { setIdx(load.length > idx + 1 ? idx + 1 : 0)}}
              src={load[idx]}
              title="gift"
            />
          </CardActionArea>
          </Card>`
        </Cookie>
      </Grid>
    </>
  )
}
Mattereal.propTypes = propTypes
Mattereal.defaultProps = defaultProps