import { useEffect} from "react";
import "./orderPlaced.css"
import { useNavigate } from 'react-router-dom';
import { useGlobal } from "../Context/Context";
import imageSuccess from "../assets/orderSuccess.png"
import ConfettiExplosion from 'react-confetti-explosion';
function OrderPlaced() {
 
  const history = useNavigate();
  const { dispatch } = useGlobal();
  // You can use this function to redirect after a certain delay
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      history('/'); // Redirect to the home page
      dispatch({ type: 'CLEAR_CART' });
    }, 5000); // Redirect after 3 seconds (adjust as needed)

    // Clean up the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(redirectTimeout);
  }, [history,dispatch]);

  return (
    <div className="success">
      <ConfettiExplosion 
      height={1500}
      width={4000}
      />
      <img src={imageSuccess} 
      width={300}
      height={300}
      alt=""/>

      <h1>Order Successful</h1>

    </div>
  );
}

export default OrderPlaced;
