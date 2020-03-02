import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    let transformedIngredient = Object.keys(props.ingredient)
    .map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    } , [] );
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Add some ingredients</p>
    }
    console.log(transformedIngredient);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default Burger;