import React from 'react';
import Classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../Navigationitems/Navigationitems';
import Drawertogger from '../Sidedrawer/Drawertogger/Drawertogger';


const toolbar =(props)=>(
      <header className={Classes.Toolbar}>
          <Drawertogger clicked={props.click} />
         <Logo height="80%"/>
          <nav className={Classes.DesktopOnly}>
            <Navigationitems />
          </nav>
      </header>
);



export default toolbar;