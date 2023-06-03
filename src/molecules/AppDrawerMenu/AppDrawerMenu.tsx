import { Drawer, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { FC, useState } from 'react';

import { AppDrawerMenuProps } from './AppDrawerMenu.types';
import { AppMenuList } from 'src/molecules'

const AppDrawerMenu: FC<AppDrawerMenuProps> = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      (event as React.KeyboardEvent).key === 'Esc'
    ) {
      setState(false);
    }

    setState(!state);
  };
  
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor='left'
        open={state}
        onClose={toggleDrawer}
      >
        <AppMenuList />
      </Drawer>
    </>
  );
};

export default AppDrawerMenu;
