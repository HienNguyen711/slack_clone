//USERS SERVICE
(function() {

  angular
    .module('angularfireSlackApp')
    .factory('Users', Users);
//inject
  Users.$inject = ['$firebaseArray', '$firebaseObject'];

  function Users($firebaseArray, $firebaseObject) {

    var usersRef = firebase.database().ref().child('users');
    var connectedRef = firebase.database().ref('.info/connected');
    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: getProfile,
      getDisplayName: getDisplayName,
      getGravatar: getGravatar,
      setOnline: setOnline,
      all: users
    };

    return Users;
      //getProfile
    function getProfile(uid) {
      return $firebaseObject(usersRef.child(uid));
    };
      //getDisplayName
    function getDisplayName(uid) {
      return users.$getRecord(uid).displayName;
    };
      //getGravatar
    function getGravatar(uid) {
      return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
    };

    function setOnline(uid) {
      var connected = $firebaseObject(connectedRef);
      var online = firebase.database().ref('users/' + uid + '/online')

      connected.$watch(function() {
        if(connected.$value === true) {
            var con = online.push(true);
            con.onDisconnect().remove();
        }
      });


    };

  };

})();
