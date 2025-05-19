import React from 'react'
import { FaStar } from "react-icons/fa";

import { useLocation,Link } from 'react-router-dom';

const ProductDetails = () => {
  const {state} = useLocation();
  console.log(state);
  return (
    <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={state.images} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{state.title}</h5>
        <p class="card-text">{state.description}</p>
        <p class="card-text">Product Category: {state.category}</p>
        <p class="card-text">Price: ${state.price}</p>
        <p class="card-text">Availibility: {state.availabilityStatus}</p>
        <p class="card-text">Stock Level: {state.brand}</p>
        <p class="card-text">Discount : {state.discountPercentage}%</p>
        <p class="card-text">Rating : {state.rating}   <FaStar/>
        </p>
        <p class="card-text">Discount : {state.discountPercentage}%</p>
        <p class="card-text">Reviews : {}</p>
        <Link to="/Products" class="btn btn-primary" >
            Continue Shopping
          </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default ProductDetails;