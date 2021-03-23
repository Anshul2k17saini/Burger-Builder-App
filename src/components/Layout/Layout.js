import React,{Component} from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component{

    state={

        showsideDrawer:false
    };

    sidedrwerclosedhandeler=()=>{

        this.setState({showsideDrawer:false})
    }
    sidedrwerclicked=()=>{
        this.setState((prevState)=>{
            return {showsideDrawer: !prevState.showsideDrawer};
        })
    }

    render(){
        return(
            <Aux>
              <Toolbar  click={this.sidedrwerclicked}/>
              <Sidedrawer 
               open={this.state.showsideDrawer}
               closed={this.sidedrwerclosedhandeler}/>
              <main className={classes.Content}>
                {this.props.children}
              </main>
            </Aux>

        );
    }


};

export default Layout;