define(function() {
    var controller = require("ListView/ProductGrid/userProductGridController");
    var actions = require("ListView/ProductGrid/ProductGridControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});