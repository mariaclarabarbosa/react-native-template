import {Box, Button, Text} from '@/components';
import {AppStackNavigation} from '@/routes/stack/types';
import React, {FC} from 'react';
import Config from 'react-native-config';

interface LoginProps {
  navigation: AppStackNavigation<'Login'>;
}

const Login: FC<LoginProps> = ({navigation}) => {
  const handleGoToHome = () => navigation.navigate('Home');
  console.log(Config.BASE_URL);
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
      paddingHorizontal="m">
      <Text variant="title" marginBottom="m">
        Login Screen
      </Text>
      <Button title="Go To Home" onPress={handleGoToHome} />
    </Box>
  );
};

export default Login;
