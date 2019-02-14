"use strict"
angular
    .module("ProfileApp")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
            .when("/profile", {
                template: `<profile></profile>`
            })
            .when("/editprofile", {
                template: `<editprofile></editprofile>`
            })
            .otherwise({ redirectTo: "/profile"})
    }])