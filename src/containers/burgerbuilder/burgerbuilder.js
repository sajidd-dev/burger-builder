import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/buildControls/buildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredient: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        purchable: false,
        total_price: 4
    }
    addingredientHandler = (type) =>  {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        console.log(updatedIngredient);
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldprice = this.state.total_price;
        const newprice = oldprice + priceAddition;
        this.setState({total_price:newprice, ingredient:updatedIngredient});
        this.updatePurchaseAbleState(updatedIngredient);

    }
    updatePurchaseAbleState (ingredient) {
        const sum = Object.keys(ingredient).map(igkey => {
            return ingredient[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchable : sum>0});
    }
    removeingredientHandler = (type) =>  {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldprice = this.state.total_price;
        const newprice = oldprice - priceAddition;
        this.setState({total_price:newprice, ingredient:updatedIngredient});
        this.updatePurchaseAbleState(updatedIngredient);
    }
    render(){
        const disableInfo = {
            ...this.state.ingredient
        } 
        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
               <Burger ingredient={this.state.ingredient} />
                <BuildControls ingredientAdded={this.addingredientHandler}
                 ingredientremove = {this.removeingredientHandler}
                 disabled = {disableInfo} 
                 purchable = {this.state.purchable}
                 price = {this.state.total_price}></BuildControls>
            </Aux>
        );
    }
}

export default BurgerBuilder;