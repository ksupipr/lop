import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ListAlt, GridView, AlignHorizontalLeft, Group } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { Paths } from 'src/constants';
import { AppMenuListProps } from './AppMenuList.types';

const AppMenuList: FC<AppMenuListProps> = () => {
  const navigate = useNavigate();

  const Navigate = (path: Paths) => {
    return () => navigate(path)
  }

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem key="projects_list" disablePadding onClick={Navigate(Paths.list)}>
          <ListItemButton>
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="Список проектов" />
          </ListItemButton>
        </ListItem>

        <ListItem key="projects_board" disablePadding onClick={Navigate(Paths.board)}>
          <ListItemButton>
            <ListItemIcon>
              <GridView />
            </ListItemIcon>
            <ListItemText primary="Доска проектов" />
          </ListItemButton>
        </ListItem>

        <ListItem key="projects_graph" disablePadding onClick={Navigate(Paths.graph)}>
          <ListItemButton>
            <ListItemIcon>
              <AlignHorizontalLeft />
            </ListItemIcon>
            <ListItemText primary="График проектов" />
          </ListItemButton>
        </ListItem>

        <ListItem key="employes_list" disablePadding onClick={Navigate(Paths.employes)}>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Список сотрудников" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
};

export default AppMenuList;
