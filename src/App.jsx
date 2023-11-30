// App.jsx


import Navbars from './Navbars';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import OrderPlaced from './Pages/orderPlaced';

const App = () => {
  

  return (
   
      <>
        <Navbars />
        
        
        
        

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>} />
          <Route path='/order' element={<OrderPlaced/>}/>
        </Routes>
      </>
   
  );
};

export default App;
