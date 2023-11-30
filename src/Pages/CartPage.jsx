import { useGlobal } from "../Context/Context";
import "../App.css";
import {useNavigate} from 'react-router-dom'
import { useEffect,useState } from "react";

const CartPage = () => {
  const { state:{cart}, dispatch } = useGlobal();
  const[cartPrice,setcartPrice] = useState(0)
  const navigate = useNavigate('/order')
  const removeCart = (item) => {
    
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item,
      });
    
  };
  useEffect(() => {
    setcartPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price) , 0)
    );
  }, [cart]);
  const orderPlaced=()=>{
    navigate('/order')
  }
  
  return (
    <div>
      <div>
        <h1 style={{textAlign:"center"}}>Shopping Cart</h1>
        <div className="cart">
          {cart.length > 0 ? (
            <ul>
              {cart.map((cartItem, index) => (
                <div key={index} className="cart-prod">
                  <img
                    src={cartItem.image}
                    className="cart-img"
                    alt={cartItem.title}
                  />
                  <h3 className="cart-title">{cartItem.title}</h3>
                  <h4>${cartItem.price}</h4>
                  <button className="button" onClick={()=>{removeCart(cartItem)}}>
                    Remove
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="cart-total">
        
        <h1><b>Your Total Cart Value is :$</b>{cartPrice}</h1>
        <button className="btn" onClick={orderPlaced}> Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
