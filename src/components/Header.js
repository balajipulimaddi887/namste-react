import Logo from "../assets/foodLogo.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserDetails from "../utils/UserDetails";
import FooterDetails from "../utils/FooterDetails";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { footer } = useContext(FooterDetails);
  console.log(footer);

  const { user } = useContext(UserDetails);

  const count = useSelector((store) => store.cart.count);

  return (
    <div className="flex justify-between items-center border border-black m-4">
      <div className="p-3">
        <img className="h-24" src={Logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex mx-3">
          <li className="mx-2 hover:text-green-400">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 hover:text-green-400">
            <Link to="/about">About us</Link>
          </li>
          <li className="mx-2 hover:text-green-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 hover:text-green-400">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="mx-2 hover:text-green-400">
            <Link to="/cart">Cart - {count} items</Link>
          </li>
        </ul>
        <h1 className="font-bold border border-1px p-1">{user.name}</h1>
        {isLogin ? (
          <button
            className="mx-4 bg-red-700 text-green-400 p-4 rounded-xl"
            onClick={() => setIsLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="mx-4 bg-green-400 p-4 text-red-700 rounded-xl"
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
