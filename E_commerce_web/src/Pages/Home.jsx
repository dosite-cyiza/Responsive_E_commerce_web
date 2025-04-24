import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'
const Home =() =>{
    return(
        
        <div>
            <Sidebar/>
            <div className='m-[80px]'>
                <Main />
            </div>
        </div>
        
    )

}
export default Home