import "./Footer.css"
import logo from "../assets/react.svg"
import useFilters from "../hooks/useFilters"


export default function Footer(){

    const {filters} = useFilters()
    return(<>
    
    <footer className="footer">
        {/*<h4>Prueba técnica de React <img src={logo}  alt="React Logo" /> </h4>
        <span>@fs_jorg3</span>*/}
        <p>{JSON.stringify(filters,null,2)}</p>
    </footer>

    
    
    </>)
}