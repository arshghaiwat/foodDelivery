
const User = (props) => {

  return(
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>Location: Pune</h3>
      <h3>Contact: gmail.com</h3>
    </div>
  );
}

export default User;