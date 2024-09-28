// import React,{useEffect} from "react"
// import Form from "./Form"
import { error } from "console"
import Button from "./button"
import axios from "axios"


 

// getCustomersData();

//   axios.get('http://localhost:3000')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Une erreur est survenue :', error);
//   });
  // const API=()=>{
  //   axios.get('https://localhost:3000/app')
  //   .then(res=>{
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }

  // const [quote,setquote]=useState('')
  // const Getquote=()=>{
  //   axios.get('https://api.kanye.rest/')
  //   .then(res =>{
  //     console.log(res.data.quote)
  //     setquote(res.data.quote)
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }
//   return(
//     <>
//     <div className="h-[36rem] w-full flex justify-center items-center">
//       {/* <Button onClick={getCustomersData} title="tester"> </Button> */}
//       {/* <Button onClick={Getquote} title="Generate quote"></Button> */}
//     {/* <Form /> */}
//     </div>
//    {/* {quote ? <p className="text-[2rem] font-semibold my-[-10rem] text-center">{quote}</p> : null} */}
//     </>
//   )
// }

import React, { useState, useEffect, createContext, useContext } from 'react';


const ProductsContext = createContext({})

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};


const ProductsList = () => {
  const products = useContext(ProductsContext);

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

// Composant principal
const App = () => {
  return (
    <ProductsProvider>
      <ProductsList />
    </ProductsProvider>
  );
};

export default App;