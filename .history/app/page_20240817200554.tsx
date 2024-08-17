 "use client"
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {


    console.log(141111)

    async function fetchProducts() {
      const res = await fetch('/api/products');


      console.log(141111 , res)
    // const data = await res.json();
     // setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}