
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();

  const totalPrice = cart.items.reduce((a,b)=> a + Number(b.price), 0)

  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cart &&
          cart.items.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}$
            </li>
          ))}
      </ul>
      <p>Total Price: $ {totalPrice} </p>
    </div>
  );
};

export default Cart;
