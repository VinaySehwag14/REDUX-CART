import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const showCart = useSelector((state) => state.toggle.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  //* async code in component for reducer
  useEffect(() => {
    fetch("https://redux-cartbackend-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
