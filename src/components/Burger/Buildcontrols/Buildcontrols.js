import React from 'react';
import classes from './Buildcontrols.module.css';
import Buildcontrol from './Buildcontrol/Buildcontrol';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Chesse',type:'cheese'},
    {label:'Meat',type:'meat'}

];

const Buildcontrols=(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.totalprice.toFixed(2)}</strong></p>
    {controls.map(ctrl=>(
         <Buildcontrol 
          key={ctrl.label} label={ctrl.label}
          added={()=>props.addIngridianthandler(ctrl.type)}
          remove={()=>props.removeIngridianthandeler(ctrl.type)}
          disable={props.disable[ctrl.type]}
          />
    ))}
    <button 
    disabled={!props.purchasable}
    className={classes.OrderButton}
    onClick={props.purchasing}
    >ORDER NOW</button>
    </div>
);



export default Buildcontrols;