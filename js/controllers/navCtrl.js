myApp.controller(
  'NavCtrl',
  [
    '$scope','$location',
    // '$modal',
    function($scope, $location){
      $scope.isUserLoggedIn = false;
      $scope.launch = function()
      {
        $location.path('/register')
      }
    // $scope.open = function (){
    //   var modalInstance = $modal.open({
    //     animation: true,
    //     templateUrl: '/partials/login.html',
    //     controller: 'dialogServiceTest',
    //     size: "lg"
    //   });
    // }
    }
  ]
)
