import React from 'react';

const Products = () => {
  // Define static product data
  const products = [
    { id: 1, name: 'Diamond Necklace', price: '$2500', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Gold Ring', price: '$1200', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Silver Bracelet', price: '$800', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Platinum Earrings', price: '$1800', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
