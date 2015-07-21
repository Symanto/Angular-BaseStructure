session = angular.module("Symanto.SessionManagement");
session.controller("LoginController", function($state, $scope, SessionService){

    console.log("LoginController");

    $scope.pass="";
    $scope.email="";
    //$scope.remember=false;

    $scope.login = function() {
        SessionService.login($scope.email, $scope.pass).then(
            //success
            //if login successful set user data:
            function(){
                SessionService.getUser().then(
                    //success
                    //setting user successful go to welcome screen:
                    function(){
                        $state.go("welcome", null, { reload: true });
                    }/*,
                    //error
                    function(){
                    }*/
                )
            },
            //error
            function(){
                $scope.errorMessage = "Error!!";
            }
        )
    };
});