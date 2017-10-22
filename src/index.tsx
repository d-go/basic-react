import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Clock } from "./components/Clock";
import { Button } from "./components/Button";

ReactDOM.render (
    ( 
        <div>
            <Hello compiler="TypeScript" framework="React" />
            <Clock />
            <Button color="green"/>
        </div>  
    ),
    document.getElementById("example")
)