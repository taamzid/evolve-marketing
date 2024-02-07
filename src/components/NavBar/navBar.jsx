import vastionLogo from "../../assets/logoMain.svg";
import "./navBar.css";
// import vastionLogoMobile from "../../assets/navNewLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="__nav-container">
        <Link to="/">
          <img src={vastionLogo} alt="vastionLogo" />
        </Link>
      </div>
      {/* <div className="__line"></div> */}
    </>
  );
};

export default NavBar;
