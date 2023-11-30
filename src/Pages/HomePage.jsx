import { useGlobal } from "../Context/Context";
import "../App.css"
const HomePage = () => {
    const { data, dispatch } = useGlobal();

  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };
  return (
    <>
      <div className="products">
          {data.map((item, index) => (
            <div className="items" key={index}>
              <img src={item.image} className="item-img" alt={item.title} />
              <h3 className="title">{item.title}</h3>
              <h5>{item.category}</h5>
              <strong>${item.price}</strong>
              <p className="desc">{item.description}</p>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>
          ))}
          </div>
    </>
  )
}

export default HomePage
