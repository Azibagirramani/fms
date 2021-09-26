import { useLocation, useParams } from "react-router";

const Navbar
 = () => {
     const { id } = useParams();
     const location = useLocation();
     console.log( 'rout', location.pathname.replace('/', ''))

    return ( 
        <div className="nav fw-bold">
            <div>
                <p> { location.pathname.replace('/', '') ? location.pathname.replace('/', '') : 'Dashboard' } </p>
            </div>
            <div>
                <p>icon and image</p>
            </div>
        </div>
     );
}
 
export default Navbar
;