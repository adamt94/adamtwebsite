

import React from 'react';
import styles from './index.module.scss';



export default function NavBar() {
    React.useEffect(() => {

        Bubbles();// code to run after render goes here
    });
    return (
        <div id="bubblearea" className={styles.bubblearea}></div>
    );
}



function Bubbles() {
    var bubbles = document.querySelector('.bubble');
    var minNoBubbles = 4;
    var maxNoBubbles = 20;
    var numberofBubbles;
    var bubblePosition;
    var w = (window.outerWidth) - 50;
    var duration;
    var sideduration;
    var opacity;
    var opacitymax = 0.5;
    var opcaitymin = 0.2;
    var bubblesize;

    //create random number of bubbles
    numberofBubbles = minNoBubbles + Math.floor(Math.random() * (maxNoBubbles + 1));
    console.log(numberofBubbles);
    for (var i = 0; i < numberofBubbles; i++) {
        //give bubble random duration number
        duration = 7 + Math.floor(Math.random() * (30 + 1));
        //random side ways duration
        sideduration = Math.floor(Math.random() * (5 + 1));
        //give bubble random position
        bubblePosition = Math.floor(Math.random() * (w + 1));
        //gives bubble random opacity
        opacity = Math.random() * (opacitymax - opcaitymin) + opcaitymin;
        //random bubble sizes
        bubblesize = 10 + Math.floor(Math.random() * (45 + 1));
        //add bubbles to screen
        var $element = document.createElement('div');
        $element.setAttribute('class', styles.bubble);
        //$element.setAttribute('style', `{'left ${bubblePosition}px)`);
        var area = document.querySelector(('#bubblearea'));

        console.log(area);
        area?.appendChild($element);
        $element.setAttribute('style', `-webkit-animation: movebubbles ${duration}s linear infinite, sideWays ${sideduration}s ease-in-out infinite alternate; opacity: ${opacity}; height: ${bubblesize}px; width: ${bubblesize}px; left: ${bubblePosition}px;`);
        // $element.setAttribute('style', `opacity: ${opacity}`);
        // $element.setAttribute('style', `height: ${bubblesize}`);
        // $element.setAttribute('style', `width: ${bubblesize}px`);
    }
}
