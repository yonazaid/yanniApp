var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "assets/templates/home.html"

    })
    .when("/about", {
        templateUrl : "assets/templates/about.html"
    })
    .when("/contact", {
        templateUrl : "assets/templates/contact.html"
    })
});
