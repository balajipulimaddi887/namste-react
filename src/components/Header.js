import Logo from "../assets/foodLogo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={Logo} />
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li><Link to="/instamart">Instamart</Link></li>
            </ul>
            {isLogin ? <button  className="login-btn logout-btn" onClick={() => setIsLogin(false)}>Logout</button> :
         <button className="login-btn" onClick={() => setIsLogin(true)}>Login</button>}
        </div>
    </div>
    )
}

export default Header;