import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'

const App = () => {

  // const [productsState, setProductsState] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(productArray => {
  //       const newProductArray = productArray.map(product => product.title);

  //       setProductsState(newProductArray);
  //     });
  // }, []);

  // const productsShown = productsState.length > 0;

  //   return (
  //     <div>
  //       {productsShown ? <SearchBar products={productsState}/> : "Loading..."}
  //     </div>
  //   )

  return (
    <div>
      <Button>Child 1</Button>
      <Button>Child 2</Button>
      <Button>Child 3</Button>
    </div>
  )
}
export default App