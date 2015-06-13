myApp.controller('startupsCtrl', ['$scope','wu', function($scope, wu) {
  $scope.title = 'Current Startups';
}]);




// $scope.getConditions=function(){
//   wu.getConditions($scope.zip).then(function(response){
//     $scope.webcams=response.data.webcams.zip
//   })
// }
