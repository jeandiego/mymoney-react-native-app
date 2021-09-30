import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron.configure({ host })
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate|svg/,
    },
    editor: false,
    overlay: false,
  })
  .setAsyncStorageHandler(AsyncStorage)
  .connect();

console.tron = reactotron;

export default reactotron;
