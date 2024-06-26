import './Products.css'
import {AddToCartIcon} from './Icons.jsx'



export default function Products({products}){
    return(
        <>
    
            <main className='products'>
                <ul>
                    { 
                        products.slice(0,10).map(product =>{ 
                            //console.log(product)
                            return(<li key={product.id}>
                                 <img src={product.thumbnail} alt={product.title} />
                                 <div>
                                  <strong>{product.title}</strong>  - ${product.price}
                                </div>
                                <div>
                                    <button>
                                        <AddToCartIcon></AddToCartIcon>
                                    </button>
                                </div>
                            </li>)
                        })
                    }
                </ul>
            </main>

        </>
    )
}


