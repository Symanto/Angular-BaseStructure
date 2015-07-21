var root = angular.module("Symanto.Root");
root.controller("WelcomeController", function($state, $scope, currentUser, LoadingIndicatorService) {
    $scope.user = currentUser;   
});