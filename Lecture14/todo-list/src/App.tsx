import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import React from 'react';

import { getTheme } from './theme/theme';
import TodoList from './views/TodoList/TodoList';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      getTheme(prefersDarkMode ? 'dark' : 'light'),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
