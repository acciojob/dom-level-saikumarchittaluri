//your JS code here. If required.
window.onload = function() {
    // Get the element with the id "level"
    var levelElement = document.getElementById("level");

    // Calculate the level of the element
    var level = 1;
    var currentElement = levelElement;
    while (currentElement.parentElement) {
        currentElement = currentElement.parentElement;
        if (currentElement.tagName === "UL") {
            level++;
        }
    }

    // Display the level using the alert function
    alert("The level of the element is: " + level);
};

