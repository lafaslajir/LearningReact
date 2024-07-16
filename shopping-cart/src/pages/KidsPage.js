import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKidsProducts } from '../actions/kidsActions';

const KidsPage = () => {
  const dispatch = useDispatch();
  const kids = useSelector((state) => state.kids);

  useEffect(() => {
    dispatch(getKidsProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Kids' Products</h1>
      {kids.loading && <p>Loading...</p>}
      {kids.error && <p>{kids.error}</p>}
      <div className="product-list">
        {kids.data && kids.data.map((product) => (
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

export default KidsPage;
