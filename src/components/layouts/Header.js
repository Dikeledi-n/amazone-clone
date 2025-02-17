import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";
import ShoppingContext from "../../context/shopping/ShoppingContext";
import { auth } from "../firebase";

const Header = () => {
  const { basket, user } = useContext(ShoppingContext);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJGqiRBL09B2uYErVmdol2L5vLqot-NrNRzzZAucs_g&s"
          alt="Amazon logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
          <Link to={!user && "/login"}>  
            <div className="header_option" onClick={handleAuthentication}>
                <span className="header_optionOne">
                  Hello {!user ? "Guest" : user.email}</span>
              <span className="header_optionTwo">{user ? "Sign Out" : 
              "Sign In"}</span>
            </div> 
          </Link>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header_optionTwo header_basketCount">
            {basket?.length}
          </span>
        </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
