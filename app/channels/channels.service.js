//CHANNELS SERVICE
(function() {

  angular
    .module('angularfireSlackApp')
    .factory('Channels', Channels);

  Channels.$inject = ['$firebaseArray'];

  function Channels($firebaseArray) {
      //reference to firebase channels node
    var ref = firebase.database().ref().child('channels');
    var channels = $firebaseArray(ref);

    return channels;


  };

})();
