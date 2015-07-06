
var myApp = angular.module('nash', ['ngRoute', 'ui.bootstrap','mwl.calendar', 'firebase']);
myApp.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/investors', {
      templateUrl: 'partials/investors.html',
      controller: 'InvestorsCtrl'
    })
    .when('/startups', {
      templateUrl: 'partials/startups.html',
      controller: 'StartupsCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'UserCtrl'
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'UserCtrl'
    })
    .when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/events', {
      templateUrl: 'partials/events.html',
      controller: 'events'
    })
    .otherwise('/');
});

myApp.constant('API_URL', 'https://nashstartuplist.firebaseio.com/');
