import { useLocation, useParams } from "react-router";
import Image from 'react-bootstrap/Image'

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
            <i class='bx bx-bell'></i>
            <Image src="https://lh3.googleusercontent.com/ogw/ADea4I4SxN_qQ1a5kbTRn4g5fDx-xfmVkv_eE4ehe2mH=s32-c-mo" roundedCircle />
            </div>
        </div>
     );
}
 
export default Navbar
;