myApp.factory('Auth', ['$rootScope', '$location', 'API_URL', function($rootScope, $location, API_URL) {
  var fb = new Firebase(API_URL);

  function login(email, password, fn) {
    fb.authWithPassword({
      email: email,
      password: password
    }, function(err, authData) {
      if(err) {
        console.log(err);
      }
      else {
        $rootScope.auth = authData;

        fn();
      }
    });
  }

  function register(email, password, fn) {
    fb.createUser({
      email: email,
      password: password
    }, function(err, authData) {
      if(err) {
        console.log(err)
      }
      else {
        $rootScope.auth = authData;

        console.log(authData);

        fn();
      }
    })
  }

  function logout(fn) {
    fb.unauth(function() {
      $rootScope.auth = null;

      fn();
    })
  }

  function getAuth() {
    return fb.getAuth();
  }

  return {
    login:login,
    register:register,
    logout:logout,
    getAuth:getAuth
  };

}]);
