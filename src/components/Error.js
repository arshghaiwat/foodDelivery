import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      You have encountered an error. Try restarting or refreshing the page.
      <h3>
        {err.statusText} &nbsp;
        {err.status}
      </h3>
      {/* <h3>{err.error.message}</h3> */}
    </div>
  );
};

export default Error;
