import { useContext } from "react"
import {FiltersContext} from "../context/filters.jsx"



export default function useFilters(){

    //const [filters, setFilters] = useState({category:'all',minPrice:0})
    const {filters,setFilters} = useContext(FiltersContext)
  
    const filterProducts = (products)=>{
      return products.filter(product =>{
        return (
          (filters.category === product.category || filters.category === "all")  
          && 
          product.price>= filters.minPrice
        )
      })
    }
  
  return{filters,filterProducts,setFilters}
  }

  

