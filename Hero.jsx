import { useNavigate } from "react-router-dom";

function Hero(){

const navigate = useNavigate();

return(

<section className="hero">

<div className="hero-text">


<h1>

Wear Your Style <br/>
Own Your Moment

</h1>


<p>

Discover premium T-Shirts designed for comfort,
confidence and everyday fashion.

</p>


<button
onClick={()=>navigate("/cart/shopfoot")}
>

Shop Now

</button>


</div>

</section>

)

}

export default Hero;