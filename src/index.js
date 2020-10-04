// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew.js";
import Badge from "./components/Badge.js";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

/* const name = "Carlos Villanueva";
const jsx = (
  <div>
    <h1>Hello soy {name}, Platzi Badges from react!</h1>
  </div>
);
const element = React.createElement("h1", {}, `Hola, me llamo ${name}`);
 */
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  /*   <Badge
    firstName="Carlos"
    lastName="Villanueva"
    jobTitle="Fullstack developer"
    twitter="harpazos"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
  />, */
  <BadgeNew />,
  container
);
