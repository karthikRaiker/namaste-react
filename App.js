const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const heading1 = React.createElement(
  "h2",
  { id: "heading1" },
  "Welcome to ReactJs World"
);
const container = React.createElement("div", { id: "conainer" }, [
  heading,
  heading1,
]);
console.log(container);
