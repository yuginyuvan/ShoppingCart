import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer";
import ShopPage from "./Component/ShopPage";
import ShopFoot from "./Cart/ShopFoot";
import ShopWatch from "./Cart/ShopWatch";
import ShopWatchWomen from "./Cart/ShopWatchWomen";
import ShopWatchKids from "./Cart/ShopWatchKids";
import ShopPhone from "./Cart/ShopPhone";
import ShopWomen from "./Cart/ShopWomen";
import ShopKids from "./Cart/ShopKids";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <Footer />
            </>
          }
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/shopfoot" element={<ShopFoot />} />
        <Route path="/cart/shopfoot/women" element={<ShopWomen />} />
        <Route path="/cart/shopfoot/kids" element={<ShopKids />} />
        <Route path="/cart/shopwatch" element={<ShopWatch />} />
        <Route path="/cart/shopwatch/women" element={<ShopWatchWomen />} />
        <Route path="/cart/shopwatch/kids" element={<ShopWatchKids />} />
        <Route path="/cart/shopphone" element={<ShopPhone />} />
        <Route path="/shop/:slug" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;