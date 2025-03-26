import React from "react";
import Navbar from "../Components/Navbar";
import { Carousel } from 'react-bootstrap';
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <div className="w-screen max-w-full p-0 m-0">
      <Navbar logo="EnchantedJewels" products="Products" login="Login"/>
      <div className="pt-13">
      <h2 className="text-3xl font-semibold text-center my-4">Welcome to Enchanted Jewels</h2>      </div>
      <div className="w-full">
        <Carousel 
          className="w-full"
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="w-full object-cover"
              src="src/imgs/jew (1).png"  
              alt="First slide"
            />
            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-2xl font-semibold text-white">Diamond Collection</h3>
              <p className="text-gray-200">Discover our finest diamond jewelry.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="w-full object-cover"
              src="src/imgs/jew (2).png"
              alt="Second slide"
            />
            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-2xl font-semibold text-white">Gold Jewelry</h3>
              <p className="text-gray-200">Elegant and timeless pieces for every occasion.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="w-full object-cover"
              src="/src/imgs/jew.png"
              alt="Third slide"
            />
            <Carousel.Caption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-2xl font-semibold text-white">Silver Bracelets</h3>
              <p className="text-gray-200">Chic and stylish bracelets for modern trends.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="w-full bg-gray-100 py-8 items-center mx-auto">
        <h2 className="text-2xl ">Clearance Sale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {products.map((product) => (
          <ProductCard key={product.id} name={product.name} price={product.price} img={product.image}/>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Home;