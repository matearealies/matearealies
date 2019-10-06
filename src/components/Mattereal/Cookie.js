import React from 'react'
import $ from 'jquery'
import './cookie.css'


export function Cookie (props) {
    var x = 0;
    function handleClick(e) {
        x++;
        $("#cookie").append('<div id="x'+x+'" hidden>+1.0</div>');
        $("#x"+x).css("top", e.clientY);
        $("#x"+x).css("left", e.clientX - 10);
        $("#x"+x).css("position", "absolute");
        $("#x"+x).css("width", "25px");
        $("#x"+x).css("height", "25px");
        $("#x"+x).css("color", "white");
        $("#x"+x).css("font-weight", "bold");
        $("#x"+x).css("animation", "GoUp 2s forwards linear");
        $("#x"+x).show();
        console.log('goose')
    }  
    
    return (
        <div id="cookie" onClick={handleClick}>
             {props.children}
        </div>
    )
}
