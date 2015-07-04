myApp.controller('ProfileCtrl', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray) {

  Profiles = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/user-profiles"));

  $scope.editProfile = function() {

  };
}]);
