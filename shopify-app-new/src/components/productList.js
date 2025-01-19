import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-item"
            style={{
              backgroundColor: `hsl(${index * 60}, 70%, 80%)`, // Dynamic background color
            }}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
