import {Box, Text} from '@/components';
import {AppStackNavigation, AppStackRoute} from '@/routes/stack/types';
import React, {FC} from 'react';

interface HomeProps {
  navigation: AppStackNavigation<'Home'>;
  route: AppStackRoute<'Home'>;
}

const Home: FC<HomeProps> = () => {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background">
      <Text variant="title">Home Screen</Text>
    </Box>
  );
};

export default Home;
