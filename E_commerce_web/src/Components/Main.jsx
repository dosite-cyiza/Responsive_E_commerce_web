import { CiSearch,CiShoppingCart } from "react-icons/ci"
import watch from '../assets/watch.jpg'
import shoeees from '../assets/shoeees.jpg'
import headphones from '../assets/headphones.jpg'
import sunglasses from '../assets/sunglasses.jpg'
import jeans from '../assets/jeans.jpg'
import sneakers from '../assets/sneakers.jpg'
import shoes from '../assets/shoes.jpg'
const Main =() =>{
    return(
        <>
        <div>
            <div>
                <div>
                    <h1>E_commerce shop</h1>
                    <div className="search">
                        <input type="text" placeholder="Search product" />
                        <button><CiSearch/></button>
                    </div>
                </div>
                <div className="categories">
                    <div>
                        <p>Watches</p>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="product">
                    <img src={sunglasses} alt="sunglasses image" />
                    <div>
                        <h1>sunglasses</h1>
                        <p>black sun glasses</p>
                        <div>
                            <p>$50.00</p>
                            <CiShoppingCart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )

}
export default Main