import { useRouteError } from "react-router-dom";

const Error = (props) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPs</h1>
      <h2>Page not found</h2>
      <h3>{error.status + " " + error.statusText}</h3>
    </div>
  );
};

export default Error;
