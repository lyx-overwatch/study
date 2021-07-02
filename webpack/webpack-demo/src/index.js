// import _ from "lodash";
import { cube } from "./main";
import printMe from "./print";
import { toWord } from "./library-test";
import "./index.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
// function component () {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   element.innerHTML = _.join(['webpack-dev-server@3.X版本和webpack-cli@4.X版本,html-webpack-plugin5@.X版本不兼容','webpack-dev-server@3.X版本对应webpack-cli@3.X版本,html-webpack-plugin54.X版本'], );

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);
//   return element
// }

function component() {
  var element = document.createElement("pre");

  element.onclick = printMe.bind(null, "webpack");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  var btn = document.createElement("button");

  btn.onclick = toWord.bind(null, 0);

  document.body.appendChild(btn);

  return element;
}

document.body.appendChild(component());
