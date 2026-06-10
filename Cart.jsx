import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
 addItem,
 removeItem,
 deleteItem,
 clearCart
} from "../Cart/CartSlice";


function Cart(){

const dispatch = useDispatch();
const navigate = useNavigate();

const cartItems =
useSelector(state=>state.cart.items);


const total = cartItems.reduce(
(sum,item)=>sum+item.price*item.quantity,
0
);


return(

<section className="cart-page">


<div className="cart-top">

<h1>
Shopping Bag
</h1>


<button
onClick={()=>navigate("/")}
>
Continue Shopping
</button>

</div>



{
cartItems.length===0 ?

<div className="empty">

<h2>Your bag is empty</h2>

</div>


:

<>


<div className="cart-list">


{

cartItems.map(item=>(


<div
className="cart-product"
key={item.id}
>


<img src={item.image}/>



<div className="cart-info">

<h2>
{item.name}
</h2>


<p>
₹{item.price}
</p>



<div className="quantity">


<button
onClick={()=>dispatch(removeItem(item.id))}
>
-
</button>


<span>
{item.quantity}
</span>


<button
onClick={()=>dispatch(addItem(item))}
>
+
</button>


</div>

</div>



<h3>

₹{item.price*item.quantity}

</h3>


<button
className="remove"
onClick={()=>dispatch(deleteItem(item.id))}
>

✕

</button>



</div>


))

}


</div>




<div className="checkout">


<h2>
Total ₹{total}
</h2>


<button>
Checkout
</button>


<button
className="clear"
onClick={()=>dispatch(clearCart())}
>

Clear Cart

</button>


</div>


</>


}


</section>

)

}


export default Cart;