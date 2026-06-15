import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import products from "./products";

function ShopPhone() {
  const dispatch = useDispatch();
  const items = products.filter((p) => p.category === "phone");

  return (
    <section className="products-section">
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ color: "#2e7d32" }}>Phones & Electronics</h2>
        <p>Latest phones and electronic gadgets.</p>

        <div className="products-grid" style={{ marginTop: 20 }}>
          {items.length === 0 && <p>No items found.</p>}

          {items.map((product) => (
            <div className="product-card" key={product.id}>
              <img className="product-img" src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-footer">
                  <span>₹{product.price ?? "—"}</span>
                  <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}

export default ShopPhone;
