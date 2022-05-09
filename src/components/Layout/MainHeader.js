import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
//redux imports
import {useSelector, useDispatch} from 'react-redux'
import { someSliceActions } from '../../store/indexReducer';

const MainHeader = (props) => {
  //reducer hooks and methods
  const dispatch = useDispatch()
  const some = useSelector(state => state.someRed.some)

  /* dispatch(someSliceActions.increment()) */ //example of dispatch

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
