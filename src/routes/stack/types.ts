import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackScreensList = {
  Home: undefined;
  Login: undefined;
};

export type AppStackNavigation<RouteName extends keyof AppStackScreensList> =
  NativeStackNavigationProp<AppStackScreensList, RouteName>;

export type AppStackRoute<RouteName extends keyof AppStackScreensList> =
  RouteProp<AppStackScreensList, RouteName>;
