import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios'

class Orders extends Component{
  state={
    orders:[],
    loading:true
  }
  componentDidMount(){
      
    axios.get('https://react-my-burger-442f0-default-rtdb.firebaseio.com/orders.json')
         .then(res=>{
           const fetchedOrders=[];
           for(let key in res.data)
           {
              fetchedOrders.push({
                ...res.data[key],
                id:key
              
              });
           }
          this.setState({loading:false,orders:fetchedOrders});
         })
         .catch(err=>{
           this.setState({loading:false});
         });
  }



render(){
    return (
        <div>
          {this.state.orders.map(order=>(
            <Order 
            key={order.id}
            ingridents={order.ingridents}
            price={order.totalprice}
            />
          ))}
        </div>
    )
}

}
export default Orders;