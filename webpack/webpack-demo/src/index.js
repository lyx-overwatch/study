import _ from 'lodash';
import printMe from './print.js';
import './index.css';

function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['webpack-dev-server@3.X版本和webpack-cli@4.X版本,html-webpack-plugin5@.X版本不兼容','webpack-dev-server@3.X版本对应webpack-cli@3.X版本,html-webpack-plugin54.X版本'], );

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element
}

document.body.appendChild(component());