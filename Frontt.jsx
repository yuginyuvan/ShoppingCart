import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "./CartSlice";
import products from "./Cart/products";
import "./App.css";

function Front() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>

            <button
              onClick={() => dispatch(addItem(product))}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>

        <button
          className="clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h4>{item.name}</h4>
                <p>
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h2>Total: ₹{total}</h2>
      </div>
    </div>
  );
}

export default Front;