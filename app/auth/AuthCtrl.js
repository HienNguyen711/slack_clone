//AUTHCONTROLLER
(function() {
  angular
    .module('angularfireSlackApp')
    .controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['Auth', '$state'];//inject

  function AuthCtrl(Auth, $state) {

    var authCtrl = this;
    authCtrl.user = {
      email: '',
      password: ''
    };

    //authCtrl.login = login;
    //authCtrl.register = register;



    authCtrl.login = function login() {
      Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function(authData) {
        console.log('User ', authData.uid+' logged in successfully.');
        $state.go('home');
      }).catch(function(error) {
        authCtrl.error = error;
      });
    };

    authCtrl.register = function register() {
      Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function(userData) {
        console.log('User ' + userData.uid + ' created successfully.');
        authCtrl.login();
      }).catch(function(error) {
        authCtrl.error = error;
      });
    };

  };

})();
