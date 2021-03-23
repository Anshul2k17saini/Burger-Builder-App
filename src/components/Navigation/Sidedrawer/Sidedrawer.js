import React from 'react';
import Classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary';


const Sidedrawer=(props)=>{
    let attachedclasses =[Classes.Sidedrawer ,Classes.Close];
    if(props.open)
    {
        attachedclasses =[Classes.Sidedrawer ,Classes.Open];
    }

    return(
        <Aux>
           <Backdrop show={props.open} clicked={props.closed}/>
           <div className={attachedclasses.join(' ')}>
            <Logo height="12%"/>
            <nav>
              <Navigationitems/>
            </nav>
           </div>
        </Aux>
       

    );
}


export default Sidedrawer;