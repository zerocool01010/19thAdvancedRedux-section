import classes from "./CartButton.module.css";
import { useEffect } from "react";
//redux imports
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/indexReducer";
import { productActions } from "../../store/indexReducer";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  //reducer hooks and methods
  const dispatch = useDispatch();
  const lenghtCartItems = useSelector((state) => state.prodRed.shoppingCartItemsQuant);
  const arrayOfItems = useSelector((state) => state.prodRed.productsArray);

  const cartHandler = () => {
    dispatch(cartActions.changeVisibility())
  };

  useEffect(() => {
    dispatch(productActions.getLength());
  }, [arrayOfItems]);


  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{lenghtCartItems}</span>
    </button>
  );
};

export default CartButton;
