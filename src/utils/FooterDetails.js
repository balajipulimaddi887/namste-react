import { createContext } from "react";

const FooterDetails = createContext({
  footer: {
    facebook: "facebook.com",
    twitter: "twitter.com",
  },
});

FooterDetails.displayName = "FooterDetails";

export default FooterDetails;
