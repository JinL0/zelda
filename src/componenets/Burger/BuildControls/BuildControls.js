import React from 'react'; 

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Fish', type: 'salad' }, 
    { label: 'Meat', type: 'bacon' },
    { label: 'Veges', type: 'cheese' },
    { label: 'Flower', type: 'meat' },
]; 

const buildControls = (props) => {
    return (<div className={classes.BuildControls} > 
            <p>Total items: {props.price}</p>
            {controls.map(ctrl => (
            <BuildControl key ={ctrl.label} 
                         label={ctrl.label}
                         added = {() => props.ingredientAdded(ctrl.type)} 
                         removed = {() => props.ingredientRemoved(ctrl.type)}
                         disabled={props.disabled[ctrl.type]} />
        ))}
        <button className = {classes.OrderButton}
                disabled={props.purchaseable}
                onClick={props.ordered}>Cook NOW </button>
    </div>);
}

export default buildControls;