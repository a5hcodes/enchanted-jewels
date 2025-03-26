import React from "react";

function ProductCard (props) {
    return (
        <div className="p-6 max-w-sm gap-3 flex flex-col items-center rounded-2xl shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl min-h-[380px] justify-between">
        <div className="h-40 w-40 flex justify-center items-center overflow-hidden rounded-xl bg-amber-100">
          <img src={props.img} alt={props.alt} className="h-full w-full object-cover" />
        </div>
        
        <div className="text-center mt-4 flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
          <p className="text-lg font-medium text-gray-600 mt-1">{props.price}</p>
        </div>
        
        <button className="mt-auto px-4 py-2 bg-indigo-900 text-white text-sm font-medium rounded-xl shadow-md hover:bg-sky-800 hover:text-black">
          Buy Now
        </button>
      </div>
    )      
}

export default ProductCard;