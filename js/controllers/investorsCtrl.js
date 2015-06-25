myApp.controller('investorsCtrl', ['$scope', 'nash', '$firebaseArray', function($scope, nash, $firebaseArray) {
  $scope.firms = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/investor_firms"));

  // $scope.firms = [
  //    {
  //      industry: 'healthcare',
  //      name: 'tristar technology ventures',
  //      contact: 'christopher rand',
  //      phone_number: '615-555-5555',
  //      email: 'fake@email.com'
  //    }
  // ];
}]);
