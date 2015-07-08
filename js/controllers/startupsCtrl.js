myApp.controller('StartupsCtrl', ['$scope',  '$routeParams', '$location', '$firebaseArray', function($scope, $routeParams, $location, $firebaseArray) {

  $scope.startups = Startups = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/startups"));

  Startups.$loaded().then(function() {
    $scope.startup = startup = Startups.$getRecord($routeParams.startup) || {};
  });

  $scope.addNewStartup = function() {
    var save = Startups.$add({
      // industry: $scope.startup.industry,
      name: $scope.startup.name,
      contact: $scope.startup.contact,
      phone_number: $scope.startup.phone,
      email: $scope.startup.email
  }).then(function() {
    $location.path('/startups');
    });
  };

  $scope.deleteStartup = function() {
    Startups.$remove(startup).then(function() {
      $location.path('/startups');
    });
  };
}]);
