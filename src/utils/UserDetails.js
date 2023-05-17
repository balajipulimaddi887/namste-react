import { createContext } from "react";

const UserDetails = createContext({
  user: {
    name: "demo",
    email: "demo@gmail.com",
  },
});

UserDetails.displayName = "UserDetails";

export default UserDetails;
