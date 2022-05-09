import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
//redux imports
import { useSelector } from "react-redux";

function App() {
  //redux things
  const shownCartButton = useSelector((state) => state.cartRed[0].visible);
  console.log(shownCartButton)
  
  return (
    <Layout>
      {shownCartButton && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
