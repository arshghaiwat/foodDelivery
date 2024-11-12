import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("whole header rendered after login button clicked");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg ">
      <div className="w-40">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex gap-5 pe-8">
          <li>Online Status:{onlineStatus? "✅":"❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/About">About us</Link></li>
          <li><Link to="/Contact">Contact us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              if (
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login")
              );
            }}
          >
            {btnNameReact}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
