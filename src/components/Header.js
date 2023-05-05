import { useState } from "react";
import { LOGO_LINK } from "../utils/constants";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_LINK} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
            {isLogin ? <button  className="login-btn logout-btn" onClick={() => setIsLogin(false)}>Logout</button> :
         <button className="login-btn" onClick={() => setIsLogin(true)}>Login</button>}
        </div>
    </div>
    )
}

export default Header;