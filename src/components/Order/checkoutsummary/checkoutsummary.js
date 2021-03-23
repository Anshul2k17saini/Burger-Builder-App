import { checkPropTypes } from 'prop-types';
import React from 'react';
import Burger from '../../Burger/Burger'
import classes from './checkoutsummary.modul.css'

const checkoutsummary=(props)=>{

    return (
    <div className={classes.Checkoutsummary}>
        <h1>we hope it tastes well</h1>
        <div style={{width:'100%',margin:'auto'}}>
           <Burger ingridents={props.ingridents}  />
        </div>
        <button onClick={props.checkoutcanceled}>CANCEL</button>
        <button onClick={props.checkoutcontinue}>CONTINUE</button>
    </div>

    )

}

export default checkoutsummary;