# Slack - a real time collaborative chat application

For a live demo, see https://slack-clone1.herokuapp.com/
or
https://slack-clone-2516f.firebaseapp.com.(not for this repo but for demo)(this fake demo use differrent Firebase account)

https://slack-clone-2516f.firebaseapp.com (not for this repo but for demo)


This project was originally based on the Thinkster.io tutorial 'Build a Real-Time Slack Clone'

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)

## Technologies used :
Angular 1, Firebase 3, AngularFire 2
Bootstrap3
Grunt
Npm, Bower

## Build & development

Run `grunt` for building and `grunt serve` for preview || Run `npm start`
Then open your browser, go to: localhost:4000


For deploy:
Log in as : email: admin@admin.com, Password : password
## Testing

Testing phase to be continued...(but currenty there is no testing for this app)

## Developer : Hien Nguyen

## Reference to
Thinkster tutorial 'Building a real-time slack clone using AngularFire': https://thinkster.io/tutorials/angularfire-realtime-slack-clone

Angular seed repo for start skeleton:
https://github.com/gothinkster/angularfire-slack

## Firebase hosting
https://slack-clone-76f2a.firebaseapp.com
### Changes from the thinskter tutorial: integrate with Firebase 3 ( thinster tutorial used Firebase2)
1.web app config:
`var config = {
  apiKey: "xxxxxx",
  authDomain: "projectid.firebaseapp.com",
  databaseURL: "https://projectid.firebaseio.com",
  storageBucket: "projectid.appspot.com",
};
firebase.initializeApp(config);
var FirebaseUrl = firebase.database().ref();`
2. Firebase variables changed format
`var channelMessagesRef = FirebaseUrl.child('channelMessages');`
3. Key() has been replaced with "key"
4. Refer to this doc: https://github.com/firebase/angularfire/blob/master/docs/migration/1XX-to-2XX.md
