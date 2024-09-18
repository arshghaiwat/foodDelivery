import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return(
    <div>
      <h1>Hello, this is about us page</h1>
      <User name={"Arsh (Functional Component)"}/>
      <UserClass name={"Arsh (Class Component)"}/>
    </div>
  );
};

export default About;