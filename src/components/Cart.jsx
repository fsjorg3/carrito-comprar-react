import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons.jsx"
import { useId } from "react"
import "./Cart.css"
export default function Cart(){
    const cartCheckboxId = useId()

    return(<>
    
        <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon></CartIcon>
        </label>
        <input id={cartCheckboxId}  type="checkbox" hidden/>
        
        <aside className="cart">
            <ul>
                <li>
                    <img 
                    src="https://cdn.dummyjson.com/cache/150x150/bitter-16/cccccc-black/1961c1376e1d8312d5ed7dbda1463b1a.png" 
                    alt="key holder" />
                    <div>
                        <strong>Key holder</strong> - $30.00
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>

    </>)
}