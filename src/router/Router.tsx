import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { FC, useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Paths } from 'src/constants';
import { ThemeContext } from 'src/context/themeContext';

import {
  Home,
  ProjectsBoard,
  ProjectsGraph,
  ProjectsList,
  Employes,
} from 'src/pages';

import { getTheme } from 'src/styles';

const Router: FC = () => {
  const { mode } = useContext(ThemeContext);
  const themeMui = getTheme(mode);

  return (
    <ThemeProvider theme={themeMui}>
      <CssBaseline />
      <Container
        sx={{
          maxWidth: '600px',
          height: 'calc(100vh + env(safe-area-inset-bottom))'
        }}
        maxWidth={false}
      >
        <Routes>
          <Route path={Paths.home} element={<Home />} />
          <Route path={Paths.board} element={<ProjectsBoard />} />
          <Route path={Paths.graph} element={<ProjectsGraph />} />
          <Route path={Paths.list} element={<ProjectsList />} />
          <Route path={Paths.employes} element={<Employes />} />
          <Route path="*" element={<Navigate to={Paths.home} replace />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default Router;
