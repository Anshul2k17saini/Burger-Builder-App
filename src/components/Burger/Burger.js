import React from 'react';

import classes from './Burger.module.css';
import Burgeringriden from './Burgeringideance/Burgeringrideance';

const Burger=(props)=>{
        
      let transformedIngridients =Object.keys(props.ingridents)//convert from object into object of key
      .map(igkey=>{
          return [...Array(props.ingridents[igkey])].map((_, i)=>{//*****check video 129 of course ******
             return <Burgeringriden Key={igkey + i} type={igkey}/>;
          });//convering into array of string having ingrident no of time the value of them
      })
      .reduce((arr,el)=>{ //el is the above array traverse automatically by javascript store in arr
          return arr.concat(el)
      },[]);
      console.log(transformedIngridients)
      //convert obve [arra1,arr2] into singl array contains all44

     if(transformedIngridients.length===0)
     {
         transformedIngridients=<div><h2>Please Add Ingridients</h2></div>
     }

    return(
       <div className={classes.Burger}>
           <Burgeringriden type="BreadTop" />
           {transformedIngridients}
           <Burgeringriden type="bread-bottom" />
       </div>
    );
};


export default Burger;