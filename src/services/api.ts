import Config from 'react-native-config';

import axios from 'axios';

export const api = axios.create({
  baseURL: Config.BASE_URL,
});
