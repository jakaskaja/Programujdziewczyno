
'use strict';
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector(".for-dropdown");
    var menu = document.querySelector(".dropdown");

    button.addEventListener("mouseover", function() {
        menu.style.display = "block";
    });
    button.addEventListener("mouseout", function() {
        menu.style.display = "none";
    })

});
