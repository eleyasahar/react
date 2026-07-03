

let h1 = document.createElement("h1");
h1.textContent = "hello"
document.body.append(h1)

// let rh1 = React.createElement( "h1", {id: "box"}, "hello i m from react");

// react.create element me teen chize ati h first eleemtn 2 atribute and 3 childeren or yh sab props me ayega
let rh1 = React.createElement(
   "h1", 
   {id: "box"}, 
   "hello i m from react", 
   React.createElement("span", {},  "iam under h1"));
   
   let realDomelem = document.querySelector("#root");
   let rootOfReact = ReactDOM.createRoot(realDomelem);

   rootOfReact.render(rh1); // method of connect 
