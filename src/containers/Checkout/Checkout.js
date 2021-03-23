import { checkPropTypes } from 'prop-types';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Contactdata from './Contactdata/Contactdata';
import Checkoutsummary from '../../components/Order/checkoutsummary/checkoutsummary'
class Checkout extends Component{
 state ={
    ingridents:{
         salad:1,
         meat:1,
         cheese:1,
         bacon:1
     },
     totalprice:0
 }

 componentDidMount(){

     const query=new URLSearchParams(this.props.location.search);
    const ingridents={};
    let price=0;
    for(let param of query.entries())
    {
        if(param[0]==='price')
        {
           price=param[1];

        }
        else{
            ingridents[param[0]]= +param[1];
        }
        
    }
    this.setState({ingridents:ingridents,totalprice:price})

 }
 canceledButton=()=>{
     this.props.history.goBack('/');
 }
 continuebutton=()=>{
     this.props.history.replace('/checkout/contact-data');
 }
   render()
   {
       return(
           <div>
               <Checkoutsummary 
               checkoutcanceled={this.canceledButton}
               checkoutcontinue={this.continuebutton}
               ingridents={this.state.ingridents}/>
               <Route  path={this.props.match.path+'/contact-data' }
                render={(props)=>(<Contactdata totalprice={this.state.totalprice} ingridents={this.state.ingridents} {...props}/>)}/>
           </div>
       )

       
   };



}
export default Checkout;