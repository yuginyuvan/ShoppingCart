import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (sum,item)=>sum+item.quantity,
    0
  );


  return (
    <>


    


    <nav className="navbar">


      <Link to="/" className="logo">
        SHOPMATE
      </Link>



      <ul className="nav-links">
        <li>
<Link to="/">
Home
</Link>
</li>

        <li>
          <Link to="/cart/shopfoot/women">
            Women
          </Link>
        </li>


        <li>
          <Link to="/cart/shopfoot">
            Men
          </Link>
        </li>


        <li>
          <Link to="/cart/shopfoot/kids">
            Kids
          </Link>
        </li>


        


      </ul>



      <div className="right-menu">

        <input
          placeholder="Search clothing"
        />


        <Link to="/cart">

          <div className="cart-icon">

            🛒

            <span>
              {totalItems}
            </span>

          </div>

        </Link>

      </div>


    </nav>


    </>
  )
}


export default Navbar;