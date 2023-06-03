import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';

import { FC, useContext } from 'react';

import { ThemeContext } from 'src/context';
import { AppDrawerMenu } from 'src/molecules'

import { AppHeaderProps } from './AppHeader.types';

const AppHeader: FC<AppHeaderProps> = ({ title }) => {
  const { mode, toggleMode } = useContext(ThemeContext);


  return (
    <AppBar position="static">
      <Toolbar>
        <AppDrawerMenu />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton color="inherit" onClick={() => toggleMode()}>
          {mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
