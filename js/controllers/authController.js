myApp.controller('AuthCtrl', ['$scope', '$location', 'Auth', '$firebaseArray',
function($scope, $location, Auth, $firebaseArray){
    $scope.user={}
    var userref = new Firebase("https://nashstartuplist.firebaseio.com/users")
    $scope.users = $firebaseArray(userref)
    $scope.login = function() {
      Auth.login($scope.user.email, $scope.user.password, function() {
        $location.path('/todo');
        $scope.$apply();
      });
    };

    $scope.register = function() {
      $scope.users.$add($scope.user)
      // Auth.register($scope.user.email, $scope.user.password, function() {
      //   Auth.login($scope.user.email, $scope.user.password, function() {
      //     $location.path('/register');
      //     $scope.$apply();
      //   });
      // });
    };

    $scope.logout=function(){
      Auth.logout(function() {
        $location.path('/login');
        $scope.$apply();
      });
    };
  }]);
