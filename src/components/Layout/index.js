import { Outlet } from 'react-router-dom';
import Sidbar from '../../Sidbar';
import './index.scss';

const Layout = ()=>{
    return (
        <div className='App'>
            <Sidbar />
            <div className='page'>
                <span 
                    className='tags top-tags'>
                </span>
                <Outlet />
                <span 
                    className='tags bottom-tags'>
                </span>
            </div>
        </div>
    )
}

export default Layout;