
var myApp = angular.module('nash', ['ngRoute', 'ui.bootstrap', "checklist-model", 'firebase']);
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
    .when('/investors/add', {
      templateUrl: 'partials/addInvestor.html',
      controller: 'InvestorsCtrl'
    })
    .when('/investor/:investor', {
      templateUrl: 'partials/investor.html',
      controller: 'InvestorsCtrl'
    })
    .when('/startups', {
      templateUrl: 'partials/startups.html',
      controller: 'StartupsCtrl'
    })
    .when('/startups/add', {
      templateUrl: 'partials/addStartup.html',
      controller: 'StartupsCtrl'
    })
    .when('/startup/:startup', {
      templateUrl: 'partials/startup.html',
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
    .otherwise('/');
});

myApp.constant('API_URL', 'https://nashstartuplist.firebaseio.com/');
myApp.constant('FIREBASE', new Firebase("https://nashstartuplist.firebaseio.com/"));
