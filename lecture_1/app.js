//create h1 tag using react:-
//creating element is core thing of react library -> logic to create elements.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World Using React CDN code!"
);
//React.createElement returns react element which is basically a javascript object which represents any html tag.

//creating a root so that it can render something inside it.
//it is a part of react dom library.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // it will take react element and convert in actual html tag and put it inside (root) dom.
