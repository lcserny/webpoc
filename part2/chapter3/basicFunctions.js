var ninja = {}; // object
ninja.data = {};

function hide(ninja) {
    ninja.visibility = false;
}

hide(ninja); // object passed as argument

// returning new object
function returnNewNinja() {
    return {};
}

ninja.name = "Hanzo"; // object properties

// =======================================================================

function ninjaFunction() {}

ninja.data = function(){};

function call(ninjaFunction) {
    ninjaFunction();
}

call(function(){});

function returnNewNinjaFunction() {
    return function(){};
}

var ninjaFunctionVar = function(){};
ninjaFunctionVar.name = "Hanzo Again";

