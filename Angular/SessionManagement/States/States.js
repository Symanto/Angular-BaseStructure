var session = angular.module("Symanto.SessionManagement");
session.config(function($stateProvider){
    $stateProvider
        .state('login',{
            parent: "trimLayout",
            url: "/login",
            views: {
                "content@trimLayout": {
                    templateUrl: "/Angular/SessionManagement/Views/login.html",
                    controller: "LoginController"
                }
            }
        })
});