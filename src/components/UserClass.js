//this is a class based react component. Basically a JS class just like a functional component is nothing but a JS function which returns a JS function.
import React from "react";

class UserClass extends React.Component {

  //to pass props we have to use constructor.
  constructor(props){
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Pune</h3>
        <h3>Contact: gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
