import React from 'react';

import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';
const Ordersummary=(props)=>{

    const ingridentsummary=Object.keys(props.ingridents)
       .map(igkey=>{
           return (<li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingridents[igkey]}</li>);
       });
  
    return(

        <Aux>
            <h3>Your Order</h3>
            <p>Delecious Burger with following Ingridents:</p>
            <ul>
              {ingridentsummary}
            </ul>
            <p><strong>Total_Price:{props.totalprice.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
           <button>cancel</button>
           <button onClick={props.funclick}>continue</button>
            
        </Aux>

    );
}

export default Ordersummary;