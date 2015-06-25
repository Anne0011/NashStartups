myApp.controller('investorsCtrl', ['$scope', 'nash', '$firebaseArray', function($scope, nash, $firebaseArray) {
    $scope.firms = $firebaseArray(new Firebase("https://nashstartuplist.firebaseio.com/investor_firms"));
}]);
