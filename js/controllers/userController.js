myApp.controller('UserCtrl', ['$scope', '$location', '$timeout', '$firebaseArray', 'Auth', function($scope, $location, $timeout, $firebaseArray, Auth) {
    var ref = new Firebase("https://nashstartuplist.firebaseio.com/");

    $scope.users = $firebaseArray(ref);
    $scope.user = {};

    $scope.login = function(type) {
      if (type === 'simple') {
        Auth.simpleLogin($scope.user.email, $scope.user.password, function() {
          $location.path('/');
        });
      } else {
        Auth.socialLogin(type, function() {
          $location.path('/');
        });
      }

      $timeout(function() {$scope.$apply();});
    };

    $scope.register = function() {
      Auth.register($scope.user.email, $scope.user.password, function() {
        Auth.simpleLogin($scope.user.email, $scope.user.password, function() {
          $location.path('/profile');
        });
      });

      $timeout(function() {$scope.$apply();});
    };

    $scope.logout = function() {
      Auth.logout(function() {
        $location.path('/login');
      });

      $timeout(function() {$scope.$apply();});
    };

    $scope.isUserLoggedIn = function() {
      auth = Auth.getAuth();

      if (auth === null) {
        return false;
      }

      return true;
    };
}]);
