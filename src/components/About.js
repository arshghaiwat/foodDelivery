import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor called")
  }

  componentDidMount(){
    //this function is used to make API calls
    //console.log("parent did mount");
  }

  render() {

    //console.log("Parent render called")

    return (
      <div>
        <h1>Hello, this is about us page</h1>
        <User name={"Arsh (Functional Component)"} />
        <UserClass  />
        
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Hello, this is about us page</h1>
//       <User name={"Arsh (Functional Component)"} />
//       <UserClass name={"Arsh (Class Component)"} location={"Pune Class"} />
//     </div>
//   );
// };

export default About;
