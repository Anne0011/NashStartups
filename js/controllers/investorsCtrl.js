myApp.controller('InvestorsCtrl', ['$scope', '$routeParams', '$location', '$firebaseArray', function($scope, $routeParams, $location, $firebaseArray) {

  $scope.firms = Firms = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/investors"));

  Firms.$loaded().then(function(F) {
    $scope.firm = firm = Firms.$getRecord($routeParams.investor) || {};
  });

  $scope.addNewFirm = function() {
    var save = Firms.$add({
        // industry: $scope.firm.industry,
        name: $scope.firm.name,
        contact: $scope.firm.contact,
        phone_number: $scope.firm.phone_number,
        email: $scope.firm.email
    }).then(function() {
      $location.path('/investors');
    });
  };

  $scope.deleteFirm = function() {
    Firms.$remove(firm).then(function() {
      $location.path('/investors');
    });
  };

  // $scope.firms = [
  //    {
  //      industry: 'healthcare',
  //      name: 'tristar technology ventures',
  //      contact: 'foo bar',
  //      phone_number: '615-555-5555',
  //      email: 'fake@email.com'
  //    }
  // ];
}]);
