import React from "react";
import { useEffect } from "react";
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

//redux toolkit imports
import { useDispatch } from "react-redux";
import { productActions } from "../../store/indexReducer";
import { useSelector } from "react-redux";

const Cart = (props) => {
  //reducer hooks and methods
  const dispatch = useDispatch();
  const arrayOfItems = useSelector((state) => state.prodRed.productsArray);

  useEffect(() => {
    dispatch(productActions.getItems());
  }, [arrayOfItems]);

  const mappedItems = arrayOfItems.map((index, i)=> {
    return <CartItem 
    key={i}
    item={{title: index.title, quantity: index.quantity, price: index.price }}
  />
  })

  console.log(mappedItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {mappedItems}
      </ul>
    </Card>
  );
};

export default Cart;
