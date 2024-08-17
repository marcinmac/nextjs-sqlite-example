 "use client"
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {




    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const text = await res.text(); // Get response as text
        console.log('Raw Response:', text); // Log the raw response
        const data = JSON.parse(text); // Parse as JSON
        setProducts(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
    fetchProducts();
  }, []);



  console.log(141111 , products)

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