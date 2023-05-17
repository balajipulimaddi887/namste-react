import UserDetails from "../utils/UserDetails";
import Profile from "./Profile";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About us</h1>
        <p>This is react project</p>
        <UserDetails.Consumer>
          {({ user }) => (
            <p>
              This project is made by {user?.name}, {user?.email}{" "}
            </p>
          )}
        </UserDetails.Consumer>
        {Array(10)
          .fill(" ")
          .map((e, i) => (
            <Profile name={"React class" + i} key={i} />
          ))}
      </div>
    );
  }

  componentDidUpdate() {
    // console.log("component Did update");
  }

  componentWillUnmount() {
    // console.log("component will un mount");
  }
}

export default About;
