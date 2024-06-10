import {products as initialProducts} from './mooks/Products.json'
import Products from './components/Products.jsx'
import  Header  from './components/Header.jsx'
import  Footer  from './components/Footer.jsx'
import { useState } from 'react'
import {IS_DEVELOPMENT} from "./config.js"
import useFilters from "./hooks/useFilters.js"
import Cart from "./components/Cart.jsx"




function App() {
  const [products, setProducts] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header ></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
     {IS_DEVELOPMENT && <Footer ></Footer>}
    </>
  )
}

export default App
