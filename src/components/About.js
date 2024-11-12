import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

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
       {/* ".Consumer" is way to access context in class based components bcoz hooks did not exist in class based components. it has a callback function which gets data inside. who passes the data? React takes care of everything */}
        <UserContext.Consumer>
          {(data)=>{
            return(<span className="font-bold">{data.loggedInUser}</span>);
          }}
        </UserContext.Consumer>
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
