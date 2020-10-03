// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const name = "Carlos Villanueva";
const jsx = <h1>Hello soy {name}, Platzi Badges from react!</h1>;
const element = React.createElement("h1", {}, `Hola, me llamo ${name}`);

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
