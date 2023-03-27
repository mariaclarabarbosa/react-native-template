import {Home, Login} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {AppStackScreensList} from './types';

const {Navigator, Screen} = createNativeStackNavigator<AppStackScreensList>();

const AppStack: FC<unknown> = () => {
  return (
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} options={{headerShown: false}} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppStack;
