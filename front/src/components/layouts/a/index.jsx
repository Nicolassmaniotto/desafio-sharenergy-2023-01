// import NavBarTop from '../../navbar/top';
import { Outlet } from 'react-router-dom';
import "../../../css/css.css"
// import FootBar from '../../footbar/a';
export default function Layout() {
    return (
        <>
            <div className='bk_menu'>
                {/* <NavBarTop /> */}
            </div>
            <Outlet />
            <footer>
                {/* <FootBar /> */}
            </footer>
        </>

    )

}
