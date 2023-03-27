import {ThemeProvider} from '@shopify/restyle';
import React, {FC} from 'react';
import THEME from '@/theme';
import Routes from '@/routes';

const App: FC<unknown> = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
