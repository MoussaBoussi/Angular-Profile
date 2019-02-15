"use strict"

function ProfileService ($location) {
    const self = this
    self.profile = {
        name: "Snoopy",
        contact: "Snoopy@prettyalright.co",
        bio: "I'm a good bowey",
        img: "dog"
    }
    // setter
    self.setUserProfile = function (object) {
        // creating property bound to the object being passed from setProfile
        self.profile = object
        console.log(self.profile)
    }
    // getter
    self.getUserProfile = function () {
        console.log(self.profile)
        return self.profile
    }
    self.editProfile = function () {
        // after you set the profile return to profile page
        $location.path("/editprofile")
    }
    self.navToProfile = function() {
        $location.path("/profile")
    }
    self.updatePic = function (newImg) {
        self.profile.img = newImg
    }
}

angular
    .module("ProfileApp")
    .service("ProfileService", ProfileService)