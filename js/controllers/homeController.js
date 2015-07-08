myApp.controller("HomeCtrl", ["$scope", "$firebaseArray", "FIREBASE", function ($scope, $firebaseArray, FIREBASE) {
  $firebaseArray(FIREBASE.child("articles")).$loaded().then(function(v) {
    $scope.articles = v;
  });

  $firebaseArray(FIREBASE.child("startups")).$loaded().then(function(v) {
    $scope.startups = v;
  });

  $firebaseArray(FIREBASE.child("jobs")).$loaded().then(function(v) {
    $scope.jobs = v;
  });
}]);
