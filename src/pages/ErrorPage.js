import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText, data } = useRouteError();

  return (
    <div>
      <h1>Oops</h1>
      <h2>Something went wrong!!!</h2>
      <h2>{`${status}:${statusText}`}</h2>
      <div style={{ fontStyle: "italic", color: "#333" }}>{data}</div>
    </div>
  );
};

export default ErrorPage;
