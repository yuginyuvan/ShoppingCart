import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import products from "./products";

function ShopWatchWomen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = products.filter((p) => p.category === "watch" && p.gender === "women");

  return (
    <section className="products-section">
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ color: "#2e7d32" }}>Women's Watches</h2>
        <p>Shop elegant and stylish watches made for women.</p>

        <div style={{ display: "flex", gap: 12, marginTop: 16, marginBottom: 24 }}>
          <button
            onClick={() => navigate("/cart/shopwatch")}
            style={{
              padding: "10px 16px",
              background: "transparent",
              color: "#2e7d32",
              border: "2px solid #2e7d32",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Men
          </button>
          <button
            onClick={() => navigate("/cart/shopwatch/women")}
            style={{
              padding: "10px 16px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Women
          </button>
          <button
            onClick={() => navigate("/cart/shopwatch/kids")}
            style={{
              padding: "10px 16px",
              background: "transparent",
              color: "#2e7d32",
              border: "2px solid #2e7d32",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Kids
          </button>
        </div>

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

export default ShopWatchWomen;
