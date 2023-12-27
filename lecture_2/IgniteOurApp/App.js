import React from "react";
import ReactDOM from "react-dom/client";

//create h1 tag using react:-
//creating element is core thing of react library -> logic to create elements.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World Using React CDN code!"
);
//React.createElement returns react element which is basically a javascript object which represents any html tag.

//Creating Nesting and sibling elements using React:
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h1", {}, "I'm an h2 tag"),
  ])
);

//JSX is HTML/XML-Like Syntax
//JSX is transpiled before it reaches to JS engine so that the browser can understand. because jsx is not a part of normal js.
//Transpilation is done by parcel by taking help of babel library.
const jsxHeading = <h1>This is the first heading using JSX</h1>;

//creating a root so that it can render something inside it.
//it is a part of react dom library.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); // it will take react element and convert in actual html tag and put it inside (root) dom.
//root.render() method will replace everything in the root tag.
