myApp.controller('profileCtrl', ['$scope', '$location', 'nash', '$firebaseArray', function($scope, $location, nash, $firebaseArray) {

  Profiles = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/profiles"));

  $scope.submit = function () {
    var save = Profiles.$add({
      companyName: $scope.company_name
    });

    $location.path('/')
  };
}]);
