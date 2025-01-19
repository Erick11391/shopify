import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
