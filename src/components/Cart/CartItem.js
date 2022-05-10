/* import React, {useState} from 'react' */
import classes from './CartItem.module.css';
//redux toolkit imports
import { useDispatch } from "react-redux";
import { productActions } from "../../store/indexReducer";

const CartItem = (props) => {
  const { title, quantity, price } = props.item;

  //reducer hooks and methods
  const dispatch = useDispatch();

  const plusMinusHandler = (event) => {
    const mathSymb = Number(event.target.name)
    dispatch(productActions.plusMinusItem({mathSymb, title}))
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price*quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button name={(-1)} onClick={plusMinusHandler}>-</button>
          <button name={1} onClick={plusMinusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
