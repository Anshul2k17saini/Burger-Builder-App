import React from 'react';
import classes from './Order.module.css'

const Order=(props)=>{
    const ingridents=[];
    for(let ingridentsName in props.ingridents){

        ingridents.push({
            name:ingridentsName,
            amount:props.ingridents[ingridentsName]})
    }
    const ingridentOutput=ingridents.map(ig=>{
        return<span
        style={{textTransform:'capitalize',
    display:'inline-block',
    margin:'0 8px',
    border:'1px solid #ccc',
    padding:'5px'}}        
        key={ig.name}>{ig.name}({ig.amount})</span>
    });

    return(
    <div className={classes.Order}>
        <p>Ingridents:{ingridentOutput}</p>
        <p>Price:<strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>

);
};
export default Order;