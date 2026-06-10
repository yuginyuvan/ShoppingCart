import { useParams, Link } from "react-router-dom";
import products from "../Cart/products";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/CartSlice";

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ShopPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => slugify(p.name) === slug);

  if (!product) {
    return (
      <section style={{ padding: 60 }}>
        <h2>Shop</h2>
        <p>Sorry, we couldn't find that shop.</p>
        <Link to="/">Return home</Link>
      </section>
    );
  }

  return (
    <section className="products-section">
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <h2 style={{ color: "#2e7d32" }}>{product.name}</h2>
        <div className="product-card" style={{ marginTop: 20 }}>
          <img className="product-img" src={product.image} alt={product.name} />

          <div className="product-info">
            <h3>{product.name}</h3>
            <p>
              Explore our collection for {product.name}. Add items to cart or
              continue shopping.
            </p>

            <div className="product-footer">
              <span>₹{product.price ?? "—"}</span>
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
