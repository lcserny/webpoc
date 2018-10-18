var ninja = {}; // function
ninja.data = {};

function hide(ninja) {
    ninja.visibility = false;
}

hide(ninja); // function passed as argument

// returning new function
function returnNewNinja() {
    return {};
}

ninja.name = "Hanzo"; // function properties
