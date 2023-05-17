import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 my-2">
      <h1 className="text-2xl text-green-600">{title}</h1>
      <button
        className="border bg-gray-400 text-white p-1"
        onClick={() => setIsVisible(isVisible)}
      >
        {isVisible ? "Hide" : "Show more"}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [section, setSection] = useState("");
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl text-red-500">This is instamart</h1>
      <Section
        title="About us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isVisible={section === "about"}
        setIsVisible={(isVisible) =>
          isVisible ? setSection("") : setSection("about")
        }
      />
      <Section
        title="Contact us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isVisible={section === "contact"}
        setIsVisible={(isVisible) =>
          isVisible ? setSection("") : setSection("contact")
        }
      />
      <Section
        title="Careers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        isVisible={section === "careers"}
        setIsVisible={(isVisible) =>
          isVisible ? setSection("") : setSection("careers")
        }
      />
    </div>
  );
};

export default Instamart;
