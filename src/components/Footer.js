import { useContext } from "react";
import UserDetails from "../utils/UserDetails";
import FooterDetails from "../utils/FooterDetails";

const Footer = () => {
  const { user } = useContext(UserDetails);
  const { footer } = useContext(FooterDetails);
  console.log(user);
  console.log("Hey " + user);
  return (
    <div>
      <h1 className="text-2xl text-gray-600 p-2">Footer</h1>
      <p>
        This website is made by {user.name} {user.email}
      </p>
      <p>
        Social details: {footer.facebook} {footer.twitter}
      </p>
    </div>
  );
};

export default Footer;
