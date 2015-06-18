var myApp = angular.module('nash', ['ngRoute']);
myApp.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/investors', {
      templateUrl: 'partials/investors.html',
      controller: 'investorsCtrl'
    }).
    when('/events', {
      templateUrl: 'partials/events.html',
      controller: 'eventsCtrl'
    }).
    when('/startups', {
      templateUrl: 'partials/startups.html',
      controller: 'startupsCtrl'
      }).
    otherwise("/");
});


myApp.constant('API_URL', 'https://nashstartuplist.firebaseio.com/');
