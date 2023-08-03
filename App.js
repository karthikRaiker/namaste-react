import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React (Old Way using React.createElement)"
);
const heading1 = React.createElement(
  "h2",
  { id: "heading1" },
  "Welcome to ReactJs World"
);
const container = React.createElement("div", { id: "conainer" }, [
  heading,
  heading1,
]);

const HeaderComponent = () => (
  <div>
    {container}
    {console.log(container)}
    <h1>Namaste ReactJs (Functional component new way using JSX)</h1>
    <h2>Sub heading</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
