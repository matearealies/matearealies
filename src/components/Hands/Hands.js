import React, { useState } from 'react'
import { bubble as Menu, slide as MenuL } from 'react-burger-menu'
import { Terminal, Matterealize, Teacher } from '../Digits'
import { WatchTeacher } from '../Watches'

function Hands (props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMatterealize(load) {
    if (load) {
      props.handleLoad(load)
    }
  }

  function handleTeacHer(lession) {
    if (lession) {
      props.handleTeacHer(lession)
    }
  }

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  var styles2 = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
    
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div>
      <MenuL noOverlay styles={ styles }>
        <WatchTeacher />
      </MenuL>
      <Menu noOverlay right styles={ styles2 } isOpen={menuOpen} handleStateChange={menuOpen} >
        <Matterealize handleMatterealize={handleMatterealize} handleTeacHer={handleTeacHer} />
        <Terminal />
        <Teacher />
      </Menu>
    </div>
  );    
}
export default Hands