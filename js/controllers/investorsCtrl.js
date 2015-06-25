myApp.controller('investorsCtrl', ['$scope','nash', '$firebaseArray' function($scope, nash, $firebaseArray) {
 {
    var list = $firebaseArray(new Firebase(URL));

    // add an item
    list.$add({ foo: "bar" }).then(...);

    // remove an item
    list.$remove(2).then(...);

    // make the list available in the DOM
    $scope.list = list;
  }
]);

  console.log("investor");
}]);
