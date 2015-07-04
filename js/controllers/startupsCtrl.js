myApp.controller('StartupsCtrl', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray) {

  Startups = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/startups"));

  $scope.addNewStartup = function() {
    var save = Startups.$add({

    });

    $location.path('/startups');
  };

  $scope.editStartup = function() {

  };

  $scope.deleteStartup = function() {

  };

  // $scope.startups = [
  //    {
  //      industry: 'healthcare',
  //      name: 'tristar technology ventures',
  //      contact: 'foo bar',
  //      phone_number: '615-555-5555',
  //      email: 'fake@email.com'
  //    }
  // ];
}]);
