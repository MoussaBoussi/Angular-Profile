"use strict"

const editprofile = {
    templateUrl: "/app/EditProfile/EditProfile.html",
    controller: ["$location", "ProfileService", function($location, ProfileService){
        const vm = this


        vm.$onInit = function () {
            vm.profile = ProfileService.getUserProfile()
        }
        vm.updateProfile = function (obj){
            ProfileService.setUserProfile(obj)
            ProfileService.navToProfile()
        }
        vm.updateImg = function(selection){
            ProfileService.updatePic(selection)
        }
        
    }]
}

angular
    .module("ProfileApp")
    .component("editprofile", editprofile)