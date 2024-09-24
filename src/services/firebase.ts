import { initializeApp } from 'firebase/app';
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';
import { getAnalytics, logEvent } from 'firebase/analytics';

import defaultConfigs from '../configs/defaults.json';

const firebaseConfig = {
  apiKey: 'AIzaSyAEyZHPWipbkFKo2oJSPj7Hzv4CgsmFiGE',
  authDomain: 'adrianleung-dev.firebaseapp.com',
  databaseURL: 'https://adrianleung-dev.firebaseio.com',
  projectId: 'adrianleung-dev',
  storageBucket: 'adrianleung-dev.appspot.com',
  messagingSenderId: '885550843918',
  appId: '1:885550843918:web:ed4218655626e03365d45f',
  measurementId: 'G-L7ZEB0D8NP',
};

const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
remoteConfig.defaultConfig = defaultConfigs;
const analytics = getAnalytics(app);

const firebase = {
  config: {
    get: (key: string) => JSON.parse(getValue(remoteConfig, key).asString()),
    fetchAndActivate: () => fetchAndActivate(remoteConfig),
  },
  analytics: {
    logEvent: (eventName: string, eventProperties?: object) =>
      logEvent(analytics, eventName, { ...eventProperties }),
  },
};

export default firebase;
