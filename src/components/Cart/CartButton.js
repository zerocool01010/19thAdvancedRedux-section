import classes from "./CartButton.module.css";
//redux imports
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/indexReducer";

const CartButton = (props) => {
  //reducer hooks and methods
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(cartActions.changeVisibility())
  };

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
