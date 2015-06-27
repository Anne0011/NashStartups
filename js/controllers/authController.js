myApp.controller('AuthCtrl', ['$scope', '$location', 'Auth', '$firebaseArray', function($scope, $location, Auth, $firebaseArray) {
    $scope.user = {};

    var ref = new Firebase("https://nashstartuplist.firebaseio.com/users");

    $scope.users = $firebaseArray(ref);

    $scope.login = function() {
      Auth.login($scope.user.email, $scope.user.password, function() {
        $location.path('/');

        $scope.$apply();
      });
    };
    $scope.registerpg = function(){
      console.log("time to register");
      $location.path('/register')
    };
    $scope.register = function() {
      Auth.register($scope.user.email, $scope.user.password, function() {
        Auth.login($scope.user.email, $scope.user.password, function() {
          $location.path('/profile');

          $scope.$apply();
        });
      });
    };

    $scope.logout=function(){
      Auth.logout(function() {
        $location.path('/login');
        $scope.$apply();
      });
    };
  }]);
