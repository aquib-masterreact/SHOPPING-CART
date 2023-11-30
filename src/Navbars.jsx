
import { useNavigate } from 'react-router-dom';
import "./App.css"
import { useGlobal } from './Context/Context';
const Navbars = () => {
  const {state} = useGlobal();
  const navigate = useNavigate();

  const cartHandler = () => {
    navigate("/cart");
  };
  const handleHome = ()=>{
    navigate('/')
  }

  return (
    <div className="navbar">
      <h1 style={{color:"white"}}>SHOPSY</h1>
      <button className='button'onClick={handleHome}>Home</button>
      <button className="button" onClick={cartHandler}>
        Cart({state.cart.length})
      </button>
      

    </div>
  );
};

export default Navbars;
