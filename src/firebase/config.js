import * as firebase from 'firebase';
import config from "./api_keys.js";

//creating local constant variables with imported config data
const API_KEY = config.firebase_api_key;
const AUTH_DOMAIN = config.firebase_authDomain;
const DATABASE_URL = config.firebase_databaseURL;
const PROJECT_ID = config.firebase_projectId;
const STORAGE_BUCKET = config.firebase_storageBucket;
const MESSAGING_SENDER_ID = config.firebase_messagingSenderId;
const APP_ID = config.firebase_appId;
const MEASUREMENT_ID = config.firebase_measurementId;

//creating a firebaseConfig object with the config data as properties
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

//if we cannot connect
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    //to remove firestore warning
    firebase.firestore().settings({ experimentalForceLongPolling: true });
}

//was export { firebase };
export default firebase;
