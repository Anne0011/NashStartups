myApp.controller('startupsCtrl', ['$scope', 'nash', '$firebaseArray', function($scope, nash, $firebaseArray) {
  $scope.startps = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/startups"));

  // $scope.startups = [
  //    {
  //      industry: 'healthcare',
  //      name: 'tristar technology ventures',
  //      contact: 'christopher rand',
  //      phone_number: '615-555-5555',
  //      email: 'fake@email.com'
  //    }
  // ];
}]);
