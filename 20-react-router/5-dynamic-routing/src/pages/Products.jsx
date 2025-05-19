import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import style from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products)
  return (
    <>
      <h2>All Products</h2>
      <div className={style.container}>
      {products.map((product) => {
         return <Product product={product} className={style.product}></Product>;
      })}
      </div>   
      </>
  );
};

export default Products;
