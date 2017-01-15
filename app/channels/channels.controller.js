(function() {
  angular
    .module('angularfireSlackApp')
    .controller('ChannelsCtrl', ChannelsCtrl);

  ChannelsCtrl.$inject = ['$state', 'Auth', 'Users', 'requireDisplayName', 'channels'];

  function ChannelsCtrl($state, Auth, Users, requireDisplayName, channels) {

    var channelsCtrl = this;

    channelsCtrl.profile = requireDisplayName;
    channelsCtrl.channels = channels;
    channelsCtrl.users = Users.all;

    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;

    channelsCtrl.newChannel = {
      name: ''
    };

    Users.setOnline(requireDisplayName.$id);


    channelsCtrl.logout = function logout() {
      channelsCtrl.profile.online = null;
      channelsCtrl.profile.$save().then(function() {
        Auth.$signOut();
        $state.go('home');
      });
    };

    channelsCtrl.createChannel = function createChannel() {
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
        $state.go('channels.messages', {channelId: ref.key});
        channelsCtrl.newChannel = {
          name: ''
        };
      });
    };


  };

})();
