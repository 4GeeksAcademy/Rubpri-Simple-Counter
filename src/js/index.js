//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter";

let counter = 0;

setInterval(function(){

    const sixNum = Math.floor(counter/10000);
    const fiveNum = Math.floor(counter/10000);
    const fourNum = Math.floor(counter/1000);
    const threeNum = Math.floor(counter/100);
    const twoNum = Math.floor(counter/10);
    const oneNum = Math.floor(counter/1);
    counter++;

    //render your react application
    ReactDOM.render(
    <SecondsCounter one={oneNum} two={twoNum} three={threeNum} four={fourNum} five={fiveNum} six={sixNum} />, 
    document.querySelector("#app")
    );

},1000
);
