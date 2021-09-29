import { NavLink } from 'react-router-dom'
const SideOptions = () => {
    const logout = () => {
        alert('logout');
    }
    return (
        <div className="side_options">
            <div className="border-bottom d-flex " style={{height : '90%'}}>
                <p className=" text-light fw-bold logo flex-start rounded-pill pt-3 px-3">
                    FMS
                </p>


            </div>

            <div className="navigation">
                <nav >
                    <NavLink to='/' exact >
                        <span className="h-5">
                            <i class='bx-fw bx bx-border-all'></i>
                            Dashboard
                        </span>
                    </NavLink>

                    <NavLink to='/Funds'>
                        <i class='bx-fw bx  bx bx-credit-card pt-1'></i>
                        <span>
                            Funds
                        </span>
                    </NavLink>
                    <NavLink to='/Projects'>
                        <i class='bx-fw bx bx bx-gift pt-1'></i>
                        <span>
                            Projects
                        </span>
                    </NavLink>
                    <NavLink to='/Settings'>
                        <i class='bx-fw bx bx-slider bx-rotate-90 ps-2'></i>
                        Settings
                    </NavLink>
                </nav>


            </div>

            <div className="border-top  logout d-flex" onClick={logout}>
                <i class='bx bx-log-out pe-2 bx-md  '></i>
                <span className="pt-1">logout </span>

            </div>

        </div>
    );
}

export default SideOptions;