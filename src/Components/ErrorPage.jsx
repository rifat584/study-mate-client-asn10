import React from "react";
import { isRouteErrorResponse, Link, useNavigate, useRouteError } from "react-router";
import { BiError } from "react-icons/bi";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
        <BiError size={150} color="red"/>
        <h1 className="text-5xl font-bold">
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <Link to={'/'} className="btn btn-accent btn-outline">Back to Home</Link>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};

export default ErrorPage;
