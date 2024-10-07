//<div id="parent">
// <div id="child1">
// <h1>I'm an h1 tag</h1>
//<h2>I'm an h2 tag</h2>
//<h3>I'm an h3 tag</h3>
//</div>
//   <div id="child2">
//     <h4>I'm an h3 tag</h4>
//     <h5>I'm an h4 tag</h5>
//     <h6>I'm an h5 tag</h6>
//   </div>
// </div>

// ! Creating above nested div structure using REACT

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h3", {}, "I'm an h3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h4", {}, "I'm an h4 tag"),
    React.createElement("h5", {}, "I'm an h5 tag"),
    React.createElement("h6", {}, "I'm an h6 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World! from React"
// );

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
