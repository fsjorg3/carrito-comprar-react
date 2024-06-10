import {  useId } from "react"
import "./Filters.css"
import  useFilters  from "../hooks/useFilters"



export default function Filters(){
    const {filters, setFilters} = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    


    const handleChangeMinPrice=(event)=>{
        setFilters(prevState => {
            return({
            ... prevState,
            minPrice: event.target.value
            })
        }
        )
    }

    const hanndleChangeCategory = (event)=>{
        setFilters(prevState => {
            return({
            ... prevState,
            category: event.target.value
            })
        }
        )
    }


    return(<>

    <section className="filters">


        <div>
            <label htmlFor={minPriceFilterId}>Precio Minimo</label>
            <input type="range" name="price" id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice} />
            <strong>{filters.minPrice}</strong>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select name="category" id={categoryFilterId} value={filters.category} onChange={hanndleChangeCategory}>
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Smartphones</option>
            </select>
        </div>


    </section>

    </>)

}