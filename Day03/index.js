import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    {id:"heading"}, 
    "Hello Welcome, to world of React"
);

console.log(heading); // return an object not actual h1 tag

// root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1>Im a h1 tag</h1>
        <h2>Im a h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1", {}, "Im a h1 tag"), React.createElement("h1", {}, "Im a h2 tag")]
    )
)

console.log(parent);
// root.render(parent);


// JSX (transpited before it reaches the JS)- PARCEL -Babel
// JSX ->babel transpiles it to React.createEIenent ReactE1enent -> JS Object HTHLEtement(render)

// REACT ELEMENT
const jsxHeading = (
    <h1 className="jsxheading" tabIndex="5">
    React using JSX
    </h1>
    );

console.log(jsxHeading) ;

// root.render(jsxHeading);

//REACT FUNCTIONAL ELEMENT
const HeadingComponet = () => {
    return <h1> React Functional Componet using curly brackets</h1>
}

//OR
const HeadingComponet2 = () => (
    <div>
        {500+200}
        {jsxHeading}
        <HeadingComponet />
        <h1> React Functional Componet using ()</h1>
     </div>   
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet2/>);