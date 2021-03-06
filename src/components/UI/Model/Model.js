import React from 'react';
import classes from './Model.module.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop'

const Model=(props)=>(
<Aux>
   <Backdrop show={props.show} clicked={props.modelclosed}/>
 <div className={classes.Modal}
    style={{
       transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
       opacity:props.show ? '1':'0' 
    }}
 
 >
    {props.children}
 </div>
 </Aux>

);


export default Model;