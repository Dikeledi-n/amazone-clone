import React, { useContext} from "react";
import { useHistory } from "react-router-dom";
import ShoppingContext from "../../context/shopping/ShoppingContext";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory(); 
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;

  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length}
              items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <div className="subtotal_button">
      <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
      </div>
    </div>

   
  );
};

export default Subtotal;