import Navbar from './Navbar';
import Footer from './Footer';
import { wrapper } from '../../styles/Custom.module.css'


const Layout = ({ children }) => {
    return ( 
        <div className={wrapper} >
            <Navbar/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;