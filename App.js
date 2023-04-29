import React from "react"
import ReactDOM from "react-dom/client";




const Heading = () => React.createElement("h1", {id:"heading"}, "Hello from create element");

const JsxHeading = () => (<h1 id="heading" className="heading" tabIndex="1">Hello from jsx</h1>)

const JsxParagraph = () => {
    return <div id="paragraph">
        <Heading />
        <p className="paragraph">I am paragraph</p>
    </div>
}

const one = 1;

const HeadingComponent = () => (
    <>
    <>
        <h1>Hii</h1>
    </>
    <div id="container">
        {Heading()}
        <Heading />
        <Heading>Hii</Heading>
        <h1 id="heading">from functional component</h1>
    </div>
    <div id="container2"></div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<HeadingComponent />)


root.render(<HeadingComponent />);