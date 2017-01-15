//PROFILE CONTROLLER
(function() {
  angular
    .module('angularfireSlackApp')
    .controller('ProfileCtrl', ProfileCtrl);
//inject
  ProfileCtrl.$inject = ['$state', 'md5', 'auth', 'profile'];

  function ProfileCtrl($state, md5, auth, profile) {

    var profileCtrl = this;
      //update profile function
    profileCtrl.updateProfile = function updateProfile() {
      profileCtrl.profile.emailHash = md5.createHash(auth.email);
      profileCtrl.profile.$save().then(function() {
          //direct to channels route
        $state.go('channels');
      });
    };

    profileCtrl.profile = profile;



  };

})();
