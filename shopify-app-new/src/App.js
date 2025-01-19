import React, { useState, useEffect } from 'react';
import ProductList from './components/productList';
import Cart from './components/cart';


const App = () => {
  // Cart state
  const [cart, setCart] = useState([]);

  // Product state (to hold fetched data)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // to handle loading state
  const [error, setError] = useState(null); // to handle error state

  // Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
        const data = await response.json();
        setProducts(data); // Update state with fetched data
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false); // Set loading to false when data is fetched or error occurs
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity in cart
  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Render loading or error messages
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
