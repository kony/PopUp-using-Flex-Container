define(function() {
    var controller = require("ListView/ProductGridWc/userProductGridWcController");
    var actions = require("ListView/ProductGridWc/ProductGridWcControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});