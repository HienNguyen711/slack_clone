//auth service
(function() {
  'use strict';

  angular
    .module('angularfireSlackApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$firebaseAuth'];

  function Auth($firebaseAuth) {
      //init auth
    var auth = $firebaseAuth();
    //return auth
    return auth;
  }

})();//IIFE
