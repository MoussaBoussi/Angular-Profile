"use strict"

const profile = {
    templateUrl: "/app/Profile/Profile.html",
    controller: ["$location", "ProfileService", function($location, ProfileService){
        const vm = this
        vm.$onInit = function () {
            vm.profile = ProfileService.getUserProfile()
        }
        vm.editProfile = function () {
            ProfileService.editProfile()
        }
    }]
}

angular
    .module("ProfileApp")
    .component("profile", profile)