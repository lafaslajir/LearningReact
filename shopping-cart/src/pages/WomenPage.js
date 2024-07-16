import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWomenProducts } from '../actions/womenActions';

const WomenPage = () => {
  const dispatch = useDispatch();
  const women = useSelector((state) => state.women);

  useEffect(() => {
    dispatch(getWomenProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Women's Products</h1>
      {women.loading && <p>Loading...</p>}
      {women.error && <p>{women.error}</p>}
      <div className="product-list">
        {women.data && women.data.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenPage;
