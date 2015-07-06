myApp.factory('Auth', ['$rootScope', '$location', '$firebaseAuth', 'API_URL', function($rootScope, $location, $firebaseAuth, API_URL) {
  var fb = new Firebase(API_URL);
  var fbAuth = $firebaseAuth(fb);

  function socialLogin(type, fn) {
    if (_.contains(['facebook', 'google', 'github', 'twitter'], type)) {
      console.log(type);

      fbAuth.$authWithOAuthPopup(type)
      .then(function(authData){
        $rootScope.auth = authData;

        fn();
      })
      .catch(function(err) {
        console.log(err);
      });
    } else {
      console.log('Tried to login with a social service that isn\'nt integrated! Tried: ' + type);
    }
  }

  function simpleLogin(email, password, fn) {
    fbAuth.$authWithPassword({
      email: email,
      password: password
    })
    .then(function(authData) {
      $rootScope.auth = authData;

      fn();
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  function register(email, password, fn) {
    fbAuth.$createUser({
      email: email,
      password: password
    })
    .then(function(authData) {
      $rootScope.auth = authData;

      fn();
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  function logout(fn) {
    fbAuth.$unauth(function() {
      $rootScope.auth = null;

      fn();
    });
  }

  function getAuth() {
    if ($rootScope.auth === null || typeof $rootScope.auth === 'undefined') {
      return fbAuth.$getAuth();
    }

    return $rootScope.auth;
  }

  return {
    simpleLogin: simpleLogin,
    socialLogin: socialLogin,
    register: register,
    logout: logout,
    getAuth: getAuth
  };

}]);
