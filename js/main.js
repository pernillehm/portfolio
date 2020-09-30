"use strict";

function showLoader(show) {
    let loader = document.querySelector('#loader');
    if (show) {
        loader.classList.remove("hide");
    } else {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 2700)
    }
}

showLoader(false);