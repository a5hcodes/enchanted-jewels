import React from 'react';
import Navbar from '../Components/Navbar';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Products = () => {
  // Define static product data
    return (
    <div className="flex items-center">
      <Navbar logo="EnchantedJewels" products="Products" login="Login"/>
      <div className="container mx-auto py-15 w-full max-w-7xl px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 pt-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} img={product.image}/>
        ))}
      </div>
      
      </div>
      </div>
  );
};  

export default Products;
