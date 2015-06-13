myApp.controller('investorsCtrl', ['$scope','wu', function($scope, wu) {
  $scope.title = 'Current Venture Capital Funds';
  // $scope.getConditions=function(){
  //   wu.getConditions($scope.zip).then(function(response){
  //     console.log(response.data);
  //     $scope.temp=response.data.current_observation.temp_f
  //   })
  // }
}]);
