import products from "../Cart/products";
import {useDispatch} from "react-redux";
import {addItem} from "../Cart/CartSlice";


function Products(){

const dispatch=useDispatch();



const tshirts =
products.filter(
p=>p.category==="footwear"
);



return(

<div className="shop-container">


{/* FILTER */}

<div className="filter">


<h3>
Filter &nbsp; 486 Items
</h3>


<hr/>


<h4>Gender</h4>


<label>
<input type="checkbox" checked readOnly/>
 Men
</label>


<label>
<input type="checkbox"/>
 Women
</label>


<label>
<input type="checkbox"/>
 Kids
</label>






<h4>Size</h4>


<div className="sizes">

<button>S</button>
<button>M</button>
<button>L</button>
<button>XL</button>

</div>






</div>



{/* PRODUCTS */}



<div className="products-area">


<h2>
T-Shirt Collection
</h2>


<div className="products-grid">


{

tshirts.map(item=>(


<div
className="product-card"
key={item.id}
>


<div className="heart">
♡
</div>


<img
src={item.image}
/>


<h3>
{item.name}
</h3>


<h4>
₹{item.price}
</h4>



<button
onClick={()=>dispatch(addItem(item))}
>

Buy Now

</button>



</div>


))


}


</div>


</div>



</div>


)


}


export default Products;