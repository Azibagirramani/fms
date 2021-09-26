import { Link } from 'react-router-dom'
const SideOptions = () => {
    return (
        <div className="side_options">
            <div className="border-bottom d-flex ">
                <p className=" text-light fw-bold bg-primary flex-start rounded-pill p-1 px-3">
                    FMS
                </p>


            </div>

            <div className="navigation">
                <nav >

                    <Link to='/' >
                        <span >
                            <i class='bx-fw bx bx-border-all'></i>
                            Dashboard
                        </span>
                    </Link>

                    <Link to='/funds'>
                        <i class='bx-fw bx  bx bx-credit-card pt-1'></i>
                        <span>
                            Funds
                        </span>
                    </Link>
                    <Link to='/projects'>
                        <i class='bx-fw bx bx bx-gift pt-1'></i>
                        <span>
                            Projects
                        </span>
                    </Link>
                    <Link to='/settings'>
                        <i class='bx-fw bx bx-slider bx-rotate-90 ps-2'></i>
                        Settings
                    </Link>
                </nav>


            </div>

            <div className="border-top">
                <p>
                    logout
                </p>
            </div>

        </div>
    );
}

export default SideOptions;