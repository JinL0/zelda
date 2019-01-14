import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../componenets/Burger/Burger';
import BurgerControls from '../../componenets/Burger/BuildControls/BuildControls';
import BuildControls from '../../componenets/Burger/BuildControls/BuildControls';
import Modal from '../../componenets/UI/Modal/Modal'
import OrderSummary from '../../componenets/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad: 1, 
    cheese: 1, 
    meat: 1, 
    bacon: 1 
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0, 
            meat: 0
        },
        totalPrice: 0, 
        purchasable: false, 
        purchasing: false
    }
    updatePurchaseState(props) {
        const ingredients = props;
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce( (sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const priceAddition = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        if(newPrice > 5){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCounted;
        this.setState( {totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients); 
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseContinueHandler = () => {
        alert('You continue!');
    }
    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const priceAddition = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        if(newPrice <= 0){
            return;
        }
        const updatedCounted = oldCount - 1; 
        const updatedIngredients = {
            ...this.state.ingredients
        }; 
        updatedIngredients[type] = updatedCounted;
        this.setState( {totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    render () {
        const disableInfo = {
            ...this.state.ingredients
        }; 
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <div>
                <Aux>
                    <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    price ={this.state.totalPrice}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients} />
                    </Modal>
                    <Burger ingredients ={this.state.ingredients}/>
                    <BuildControls ingredientAdded={this.addIngredientHandler}
                                   ingredientRemoved={this.removeIngredients}
                                   disabled={disableInfo}
                                   price ={this.state.totalPrice}
                                   purchasable = {this.state.purchasable}
                                   ordered={this.purchaseHandler}
                                   />
                </Aux>

            </div>
        ); 
    }
}
export default BurgerBuilder; 