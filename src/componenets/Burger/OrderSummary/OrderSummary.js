import React from 'react';
import Aux from '../../../hoc/Aux' 
import Button from '../../UI/Button/Button'
const getfinal = (list) =>{
    if(list['salad'] *  list['bacon'] * list['cheese'] * list['meat'] !== 0) {
        return (<p>Meat and Seafood Fry</p>); 
    } else if (list['salad'] *  list['bacon'] * list['cheese'] !== 0){
        return (<p>Meat and Seafood Fry</p>); 
    } else if (list['salad'] *  list['bacon']  * list['meat'] !== 0) {
        return (<p>Meat and Seafood Fry</p>);
    }else if (list['salad'] * list['cheese'] * list['meat'] !== 0) {
        return (<p>Steamed Fish</p>);
    } else if (list['bacon'] * list['cheese'] * list['meat'] !== 0){
        return (<p>Steamed Meat</p>);
    } else if (list['cheese'] * list['meat'] !== 0) {
        return (<p>Fried wild greens</p>)
    } else if (list['salad'] * list['cheese'] !== 0) {
        return (<p>Steamed Fish</p>);
    } else if (list['salad'] * list['meat'] !== 0) {
        return (<p>Steamed Fish</p>) 
    } else if (list['bacon'] * list['cheese'] !== 0){
        return (<p>Steamed Meat</p>) 
    } else if (list['bacon'] * list['meat'] !== 0){
        return (<p>Steamed Meat</p>) 
    } else if (list['salad'] > 0) {
        if (list['salad'] > 1){
            return (<p>Fish Skewer</p>); 
        } else {
            return (<p>Cooked fish</p>); 
        }
    } else if (list['bacon'] > 0) {
        if (list['bacon'] > 1){
            return (<p>Meat Skewer</p>); 
        } else {
            return (<p>steak</p>); 
        }
    } else if (list['meat']  > 0) {
        return (<p>Cooked flower</p>);
    } else if (list['cheese']  > 0) {
        return (<p>Cooked Veges</p>);
    }
    return;
}

const orderSummary = (props) => {
    // todo check the recipe and out put different combinatio
    const foodReasult = getfinal(props.ingredients); 
    return ( 
        <Aux>
    <div>
            <h3> Your Food </h3>
            <p> result: {foodReasult}</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}> CANCEL </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}> CONTINUE </Button>
            </div> 
            </Aux>       
    )
}; 

export default orderSummary; 