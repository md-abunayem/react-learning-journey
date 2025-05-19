import React from "react";
import {Link} from "react-router-dom";
import style from "./Product.module.css";
const Product = ({ product }) => {
    const {title, images,description,brand,category,price,id} = product;
  return (
    <>
      <div class="card" style={{width: "18rem"}}>
        <img src={images} class="card-img-top" alt={product.title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {description}
          </p>
          <p className={style.brand}> <strong>Brand Name:</strong> {brand}</p>
          <p><strong>Category:</strong> {category}</p>
          <h5><strong>Price: </strong>${price}</h5>
          <Link to={`/Products/:${id}`} class="btn btn-primary" state={product}>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
