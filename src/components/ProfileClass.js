import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Child Constructor" + this.props.name);
  }

  componentDidMount() {
    // this is where we make api calls
    console.log("Child ComponentDidMount" + this.props.name);
  }

  render() {
    console.log("Child render" + this.props.name);
    return (
      <div>
        <h1>This is profile class component</h1>
        <h1>{this.props.name}</h1>
        <h2>count : {this.state.count}</h2>
        <h2>count 2: {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Profile;
