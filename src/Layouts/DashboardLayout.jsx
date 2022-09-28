import { Outlet } from 'react-router-dom'

import { useState } from 'react';
import DrawerHorizontalMenu from '../components/GUI/DrawerHorizontalMenu';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DrawerHorizontalMenu open={open} closeMenu={handleDrawerClose} openMenu={handleDrawerOpen} title="TEST" width={300}>
        <Outlet />
      </DrawerHorizontalMenu>
    </>
  )
}

export default DashboardLayout