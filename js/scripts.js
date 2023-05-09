"use strict";

const btn = document.querySelector("header a");
const h1 = document.querySelector("header h1");
const h1Text = h1.innerText; //get the original value of h1
let toggleCounter = 0; //if it's even then toggle to the other state, otherwise go back to default

//callback to button listener, the script does not stop the code if not triggered
btn.addEventListener("click", () => {
    toggleCounter++;
    // if(toggleCounter % 2 === 0)
    //     h1.innerText = h1Text;
    //     //if it's even then toggle to the other state, otherwise go back to default
    // else
    //     h1.innerText = "Będzie pan zadowolony";

    //shorter version of the IF (? if yes, : else)
    //operator warunkowy \/ do prostych if'ów
    toggleCounter % 2 === 0 ? h1.innerText = h1Text : h1.innerText = "Będzie pan zadowolony";
});

//it's good to use semicolons ; to optimise the code if all of the whitespace is deleted (spaces, tabs, new lines etc) [minification]