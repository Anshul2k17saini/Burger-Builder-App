import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Model from '../../../src/components/UI/Model/Model';
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import Witherrorhandeler from '../../hoc/witherrorhandeler/witherrorhandeler';


const INGRIDENT_PRICE= {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};


class BurgerBuilder extends Component {

  state={
    ingridents:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalprice:4,
    purchasable:false,
    purchasing:false,
    loading:false,
    
  }
  
updatepurchasestate(ingridents){
  //const ingridents={ this is noting giving us update ingridents sowe gwt parameter
  //  ...this.state.ingridents
  //};
  const sum=Object.keys(ingridents)
    .map(igkey=>{//convert into array of value in ingridents
      return ingridents[igkey]
    })
    .reduce((sum,el)=>{//now convert full array value in onle value(sum of all values in array)
      return sum+el;
    },0);//here sum(set to zero as use see sath ma iska) is new value and el is previous value(value in object)
    this.setState({purchasable:sum>0});

}

addIngridianthandler=(type)=>{

const oldcount=this.state.ingridents[type];
const Updatecount=oldcount+1;
const updateIngridents={
  ...this.state.ingridents
}
updateIngridents[type]=Updatecount;
const priceAddintion=INGRIDENT_PRICE[type];
const oldprice=this.state.totalprice;
const newPrice=priceAddintion+oldprice;
this.setState({totalprice:newPrice,ingridents:updateIngridents});
this.updatepurchasestate(updateIngridents);


}
removeIngridianthandeler=(type)=>{

  const oldcount=this.state.ingridents[type];
  if(oldcount<=0)
  {
    return;
  }
const Updatecount=oldcount - 1;
const updateIngridents={
  ...this.state.ingridents
}
updateIngridents[type]=Updatecount;
const pricedidaction=INGRIDENT_PRICE[type];
const oldprice=this.state.totalprice;
const newPrice=oldprice-pricedidaction;
this.setState({totalprice:newPrice,ingridents:updateIngridents});
this.updatepurchasestate( updateIngridents);

}
purchasehandler=()=>{

  this.setState({purchasing:true});
}
purchasingclosed=()=>{
 
  this.setState({purchasing:false})

}
Continuefun=()=>{

      const queryParams=[];
        for(let i in this.state.ingridents)
        {
          queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingridents[i]))
        }
        queryParams.push('price='+this.state.totalprice)
        const querystring=queryParams.join('&')
        this.props.history.push({
          pathname:'/checkout',
          search:'?'+querystring
        });
  
}

render(){
   const disable={
     ...this.state.ingridents
   }

   for(let key in disable)
   {
        disable[key]= disable[key]<=0;
   }

   let ordersummary= <Ordersummary 
    funclick={this.Continuefun} totalprice={this.state.totalprice}
    ingridents={this.state.ingridents} />
   if(this.state.loading)
   {
       ordersummary=<Spinner />
   }


    return(
        <Aux>
          <Model show={this.state.purchasing} modelclosed={this.purchasingclosed}>
            {ordersummary}
          </Model>
          <Burger ingridents={this.state.ingridents} />
          <Buildcontrols 
            addIngridianthandler={this.addIngridianthandler}
            removeIngridianthandeler={this.removeIngridianthandeler}
            disable={disable}
            totalprice={this.state.totalprice}
            purchasable={this.state.purchasable}
            purchasing={this.purchasehandler}
          /> 
         </Aux>
    );
}

}



export  default Witherrorhandeler(BurgerBuilder); 