import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Model from '../../components/UI/Model/Model';
import Aux from '../Auxilary';
import axios from 'axios';



const Witherrorhanseler=(WrappedComponent)=>{

    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
              axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
              })
              axios.interceptors.response.use(res=>res,error=>{
                  this.setState({error:error})
              });

        }
        clickbackdrop=()=>{
               this.setState({error:null})
        }
        render()
        {
            return(
                <Aux>
                    <Model show={this.state.error}  clicked={this.clickbackdrop}> 
                        {this.state.error ? this.state.error.message:null}
                    </Model>
                  <WrappedComponent {...this.props} />
                </Aux>
                
            )

        }
        
    }
}


export default Witherrorhanseler;