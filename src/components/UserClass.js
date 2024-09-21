//this is a class based react component. Basically a JS class just like a functional component is nothing but a JS function which returns a JS function.
import React from "react";

class UserClass extends React.Component {
  //to pass props we have to use constructor.
  constructor(props) {
    super(props);
    // console.log(props);

    // console.log("child constructor");

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dum",
        location: "dummy",
      },
    };

    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    //this function is used to make API calls
    //console.log("child mounted")

    const data = await fetch("https://api.github.com/users/arshghaiwat");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUnmount(){
    console.log("component unmounted")
  }

  render() {
    //console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    const { count2 } = this.state;
    console.log(this.props.name + "Child constructor");

    return (
      <div className="user-card">
        <h2>Count class : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click to increment
        </button>
        <h2>Count2 class : {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
         <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
