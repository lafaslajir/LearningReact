import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory } from '../actions/productActions';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../actions/cartActions';

const WomenPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredData);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(filterProductsByCategory("women's clothing"));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };

  const handleDecrementQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };

  return (
    <div>
      <h1>Women's Products</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="product-list">
        {products && products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button onClick={() => handleIncrementQuantity(product)}>Increase Quantity</button>
            <button onClick={() => handleDecrementQuantity(product)}>Decrease Quantity</button>
            <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenPage;
