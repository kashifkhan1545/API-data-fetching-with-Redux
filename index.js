// index.js
import { AppRegistry } from 'react-native';
import App from './src/App';  // Adjust the path if needed
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
