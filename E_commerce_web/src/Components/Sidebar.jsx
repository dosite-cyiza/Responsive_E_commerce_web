import { HiOutlineMenuAlt2, HiOutlineHome } from 'react-icons/hi'
import { CiShoppingCart, CiDeliveryTruck } from 'react-icons/ci'
import { IoHeartOutline } from 'react-icons/io5'
const Sidebar = () => {
    return (
        <div className='fixed top-0 let-0 h-screen p-2 bg-orange-100'>
            <ul className='p-3 space-y-10'>
                <li>
                    <button>
                        <HiOutlineMenuAlt2 />
                    </button>
                </li>

                <li>
                    <button>
                        <HiOutlineHome />
                    </button>
                </li>
                <li>
                    <button>
                        <CiShoppingCart />
                    </button>
                </li>
                <li>
                    <button>
                        <IoHeartOutline />
                    </button>
                </li>
                <li>
                    <button>
                        <CiDeliveryTruck />
                    </button>
                </li>
            </ul>

        </div>
    )

}
export default Sidebar