import { firebase } from '../node_modules/firebase';

const config = {
    apiKey: 'AIzaSyDKeYU8_ttRpkHRDtlH_M34MQMjVMd1gPA',
    authDomain: 'dance-it-2d361.firebaseapp.com',
    databaseURL: 'https://dance-it-2d361.firebaseio.com',
    projectId: 'dance-it-2d361',
    storageBucket: '',
    messagingSenderId: '57308219811',

  };

firebase.initializeApp(config);

const db = firebase.database().ref();
const auth = firebase.auth();

return {
      db,
      auth,
  };



