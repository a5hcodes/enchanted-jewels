import React from "react";

function ProductCard (props) {
    return (
        <div className="p-6 max-w-sm gap-3 flex flex-col items-center rounded-2xl shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="h-40 w-40 flex justify-center items-center overflow-hidden rounded-xl bg-amber-100">
              <img src={props.img} alt={props.alt} className="h-full w-full object-cover grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"/>
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
              <p className="text-lg font-medium text-gray-600 mt-1">{props.price}</p>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all"> Buy Now</button>
        </div>
    )
}

export default ProductCard;