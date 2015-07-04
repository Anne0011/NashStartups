myApp.controller('AuthCtrl', ['$scope', '$location', '$firebaseArray', 'Auth', function($scope, $location, $firebaseArray, Auth) {
    var ref = new Firebase("https://nashstartuplist.firebaseio.com/");

    $scope.users = $firebaseArray(ref);
    $scope.user = {};

    var handleLogin = function(error, authData) {
      if (error) {
        console.log(error);
      } else {
        console.log(authData);

        $location.path('/');
      }
    };

    $scope.loginWithFacebook = function() {
      ref.authWithOAuthPopup('facebook', handleLogin);
    };

    $scope.loginWithGoogle = function() {
      ref.authWithOAuthPopup('google', handleLogin);
    };

    $scope.loginWithTwitter = function() {
      ref.authWithOAuthPopup('twitter', handleLogin);
    };

    $scope.loginWithGithub = function() {
      ref.authWithOAuthPopup('github', handleLogin);
    };

    $scope.login = function() {
      Auth.login($scope.user.email, $scope.user.password, function() {
        $location.path('/');

        $scope.$apply();
      });
    };

    $scope.register = function() {
      Auth.register($scope.user.email, $scope.user.password, function() {
        Auth.login($scope.user.email, $scope.user.password, function() {
          $location.path('/profile');

          $scope.$apply();
        });
      });
    };

    $scope.logout = function() {
      Auth.logout(function() {
        $location.path('/login');

        $scope.$apply();
      });
    };
}]);
