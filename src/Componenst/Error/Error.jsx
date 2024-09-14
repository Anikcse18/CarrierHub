import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl">404</h1>
      <h1 className="text-2xl">Bad Gate Way</h1>
      <button className="bg-green-500 p-3 rounded-lg mt-3">
        <NavLink to="/">GO TO HOME</NavLink>
      </button>
    </div>
  );
};

export default Error;
