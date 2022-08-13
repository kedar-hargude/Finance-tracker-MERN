import React from "react";

import "./Button.css"

export default function Button(props){
    return(
        <button
            className="button"
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}