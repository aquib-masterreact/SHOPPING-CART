import {  createContext ,useState,useEffect, useContext, useReducer} from "react";
import cartReducer from "./Reducer";


 const myContext = createContext();


// eslint-disable-next-line react/prop-types
const Context = ({children}) => {
    const [data, setdata] = useState([]);
    const [state,dispatch] = useReducer(cartReducer,{
        products:data,
        cart:[]
    })
  const fetchAPI = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
  let info = await response.json();
      setdata(info);
      
      
    } catch (error) {
      console.error("Error fetching data:", error);

    }
    
  };
  useEffect(() => {
    fetchAPI();
  },[]);
  useEffect(() => {
  console.log(data);
}, [data]);
  return (
    <myContext.Provider value={{data,state,dispatch}}>
      {children}
    </myContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobal = ()=>{
    return useContext(myContext)
}
export default Context

