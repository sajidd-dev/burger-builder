import React from 'react';
import classes from './buildControls.css'
import BuildControl from './buildControl/buildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p> Current price : <strong>{props.price.toFixed(2)}</strong></p>
         {controls.map(cntr =>
            (
                <BuildControl
                key={cntr.label}
                label={cntr.label}
                added={() => props.ingredientAdded(cntr.type)} 
                removed = {() => props.ingredientremove(cntr.type)}
                disabled = {props.disabled[cntr.type]}/>  
            ))}
    </div>
);

export default buildControls;
