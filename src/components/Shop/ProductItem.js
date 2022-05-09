import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import React from "react";
import { useEffect } from "react";
//redux toolkit imports
import { useDispatch } from "react-redux";
import { productActions } from "../../store/indexReducer";

const ProductItem = (props) => {
  //reducer hooks and methods
  const dispatch = useDispatch();

  const { title, price, description, quantity } = props;

  const addItemHandler = () => {
    dispatch(
      productActions.addItemToProductsArray({
        title,
        price,
        description,
        quantity,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
