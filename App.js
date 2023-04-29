const heading = React.createElement("h1",
 {id: "heading",
  abc : "abc",
 class: "heading"}, "Hello world from React!");


 /***
  * 
  * <div id ="parent">
  *     <div id="child1">
  *         <h1> I am h1 tag </h1>
  *         <h2> I am h2 tag </h2>
  *     </div>
  *     <div id="child1">
  *         <h1> I am h1 tag </h1>
  *         <h2> I am h2 tag </h2>
  *     </div>
  * </div>
  */

 const parent = React.createElement("div", {id : "parent"}, 
            [React.createElement("div", {id : "child1"}, 
            [React.createElement("h1", {}, "I am h1") , React.createElement("h1", {}, "I am h2")]), 
            React.createElement("div", {id : "child2"}, 
            [React.createElement("h1", {}, "I am h1") , React.createElement("h1", {}, "I am h2")])])

console.log(parent) // not <h1> tag, it is react element(js object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);