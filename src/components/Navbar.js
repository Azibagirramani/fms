import { useLocation } from "react-router";
import Image from "react-bootstrap/Image";

const Navbar = () => {
  const location = useLocation();
  console.log("rout", location.pathname.replace("/", ""));

  return (
    <div className="navi fw-bold d-flex align-items-center">
      <div>
        <p>
          {" "}
          {location.pathname.replace("/", "")
            ? location.pathname.replace("/", "")
            : "Dashboard"}{" "}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <i class="bx bx-bell me-2 pt-1 nav_icon"></i>

        <Image
          src="https://lh3.googleusercontent.com/ogw/ADea4I4SxN_qQ1a5kbTRn4g5fDx-xfmVkv_eE4ehe2mH=s32-c-mo"
          roundedCircle

          className=" nav_icon "
        />

      </div>
    </div>
  );
};

export default Navbar;
