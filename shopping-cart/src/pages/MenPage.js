import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenProducts } from '../actions/menActions';

const MenPage = () => {
  const dispatch = useDispatch();
  const men = useSelector((state) => state.men);

  useEffect(() => {
    dispatch(getMenProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Men's Products</h1>
      {men.loading && <p>Loading...</p>}
      {men.error && <p>{men.error}</p>}
      <div className="product-list">
        {men.data && men.data.map((product) => (
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

export default MenPage;
