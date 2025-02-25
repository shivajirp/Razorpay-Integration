import React from 'react'
import Products from './components/Products.jsx';
import productsData from './components/data.js';

const App = () => {
  return (
    <div>
      <Products products={productsData}/>
    </div>
  )
}

export default App
