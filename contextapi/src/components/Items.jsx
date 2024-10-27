
import { useCart } from "../context/CartContext";

const Items = (props) => {
  const cart = useCart();

  return (
    <div>
      <ul>
        <li>Product Name: {props.title}</li>
        <label>Price: {props.price}$</label>
      </ul>
      <button
        type="button"
        onClick={() =>
          cart.setItems([...cart.items, { title: props.title, price: props.price }])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Items;
