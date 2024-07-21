import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layouts/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { auth } from "./components/firebase";
import ShoppingContext from "./context/shopping/ShoppingContext";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders";
import Prime from "./components/Prime";

const stripePromise = loadStripe("pk_test_51PXJifLLDSAP9kCLMpI5M9cYTdu01XYc6Ee0QpdFYLFUBpvNIazufhQ1fpTIBO1nLpY9iLK4tmxthNb7Bs6BhHnN00dq5Bh9Zj");

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
           <Redirect to="/home" />
          </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/payment">
         <Elements stripe={stripePromise}>
         <Payment />
         </Elements> 
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/prime">
            <Prime />
          </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        </Switch>
      </main>
      </>
  );
};

export default App;

//Checkout (isLogin) > Payment (isLogin) > PaidOrder (isLogin)