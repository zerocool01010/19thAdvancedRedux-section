import React, {useState} from 'react'
import classes from './CartItem.module.css';
//redux toolkit imports
import { useDispatch } from "react-redux";
import { itemActions } from "../../store/indexReducer";

const CartItem = (props) => {
  const { title, quantity, price, total = (price*quantity) } = props.item;

  //reducer hooks and methods
  const dispatch = useDispatch();
  //normal hooks
  const [finalQ, setFinalQ] = useState(quantity)
  /* const [finalTotal, setFinalPrice] = useState(total) */

  const plusMinusHandler = (event) => {
    const mathSymb = Number(event.target.name)
    /* dispatch(itemActions.plusMinusItem({mathSymb, title})) */
    if (finalQ >= 1) {
      setFinalQ(finalQ + mathSymb)
    } else {
      if (mathSymb === 1) {
        setFinalQ(finalQ + mathSymb)
      }
    }
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{finalQ}</span>
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
