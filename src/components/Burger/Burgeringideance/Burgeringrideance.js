import React,{ Component } from 'react';
import classes from './Burgeringrideant.module.css';
import PropTypes from 'prop-types';


class Burgeringrident extends Component{
    render(){

        let ingrident=null;
        switch(this.props.type){
    
            case ('bread-bottom'):
                ingrident=<div className={classes.BreadBottom}></div>
                break;
            case ('BreadTop'):
                ingrident=(
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingrident=<div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingrident=<div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingrident=<div className={classes.Salad}></div>
                break; 
            case ('bacon'):
                ingrident=<div className={classes.Bacon}></div>
                break;
            default:
                ingrident=null;         
                
    
        }
        return ingrident;
    }
};

Burgeringrident.propTypes={//here i am setting the authentication for the prop coming

    type:PropTypes.string.isRequired
};

export default Burgeringrident;