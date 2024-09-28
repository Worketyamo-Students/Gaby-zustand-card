import { endianness, loadavg } from 'os';
import React, { Children, useEffect } from 'react';
import { threadId } from 'worker_threads';
import { create } from 'zustand';


const useProductStore = create(set => ({
  products: [],
  fetchProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    set({ products: data });
  }
}));


const ProductsList = () => { 
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex flex-wrap">
      {products.map(product => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={product.image} alt={product.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {product.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              ${product.price}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rating: {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};


const App = () => {
  return <ProductsList />;
};

export default App;