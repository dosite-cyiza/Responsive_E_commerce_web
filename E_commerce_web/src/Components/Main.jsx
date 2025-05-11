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
        <div className="w-full relative">
            <div className="sticky top-0 z-10">
                <div className="header flex justify-between items-center p-4">
                    <h1 className="text-3xl font-bold">E_commerce shop</h1>
                    <div className="search flex justify-between items-center px-5py-2 bg-gray-100 rounded w-40 p-2">
                        <input type="text" placeholder="search product" className="bg-transparent outline-0" />
                        <button className=""><CiSearch/></button>
                    </div>
                </div>
                <div className="categories w-full flex space-x-3 px-4 py-10">
                    <div className="bg-black text-white px-3 py-2 self-start drop-shadow-xl rounded-full"> 
                        <p>Watches</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Monitors</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-fulldrop-shadow-xl"> 
                        <p>Mouses</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Glasses</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Keyboards</p>
                    </div>
                    <div className="bg-white text-balck px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2 self-start rounded-full drop-shadow-xl"> 
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white text-black px-5 py-2  self-start rounded-full drop-shadow-xl"> 
                        <p>Laptops</p>
                    </div>
                </div>
            </div>
            <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                <div className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
                    <img src={sunglasses} alt="sunglasses image" className="w-full h-[60%]"  />
                    <div className="m-2 bg-gray-100">
                        <h1 className="text-xl font-semibold">sunglasses</h1>
                        <p className="text-sm">black sun glasses</p>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold">$50.00</p>
                            <CiShoppingCart size={'1.4rem'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    )

}
export default Main