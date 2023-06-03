import { ThemeContextProvider } from 'src/context';

import Router from './router';

const App = () => (
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>
);

export default App;
