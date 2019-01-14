import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flower from './flower.png';
import meat from './meat.png'
import veges from './veges.png'
import fish from './fish.png'

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
    let ingredient = null; 
    switch(this.props.type) {
        case('bread-bottom'):
            ingredient = null;
            break;
        case('bread-top'):
            ingredient = null;
            break; 
        case('meat'):
            ingredient = <div> <img style={{width: '100px', height: '100px'}} src={flower} /> </div>; 
            break;
        case('cheese'):
            ingredient = <div> <img style={{width: '100px', height: '100px'}} src={veges} /> </div>;
            break;
        case('salad'):
            ingredient = <div> <img style={{width: '100px', height: '100px'}} src={fish} /> </div>;
            break;
        case('bacon'):
            ingredient = <div> <img style={{width: '100px', height: '100px'}} src={meat} /> </div>;
            break;
        default:
            ingredient = null
    }
    return ingredient;
}
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngredient; 