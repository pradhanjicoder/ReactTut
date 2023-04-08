import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <>
    {/* fragments to use multiple lines */}
    <h1>Balram Netflix</h1>
    <p>List of 5 webseries</p>
    <ol>
      <li>Abs</li>
      <li>abcd</li>
      <li>abe</li>
      <li>dg</li>
      <li>srdg</li>
    </ol>
  </>,
  document.getElementById("root")
);
