var root = angular.module("Symanto.Root");
root.controller("RootController", function ($scope, $state, loadingIndicatorState) {

   $scope.loader = loadingIndicatorState;
});