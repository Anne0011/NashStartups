myApp.controller('InvestorsCtrl', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray) {

  Firms = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/investor_firms"));

  $scope.addNewFirm = function() {
    var save = Firms.$add({

    });

    $location.path('/investors');
  };

  $scope.editFirm = function() {

  };

  $scope.deleteFirm = function() {

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
