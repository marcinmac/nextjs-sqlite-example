 "use client"
// pages/index.js
import { useEffect, useState } from 'react';


const productsDefault = {
  id: '',
  name: '',
  description: '',
  price: 0,
};


export default function Home() {
  const [products, setProducts] = useState([productsDefault]);

  useEffect(() => { 
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
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