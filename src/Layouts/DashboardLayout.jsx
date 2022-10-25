import { Outlet } from 'react-router-dom'

import { useState } from 'react';

import DrawerHorizontalMenu from '../components/GUI/DrawerHorizontalMenu';
import DrawerMenu from '../components/GUI/menu/DrawerMenu';

import WorkIcon from '@mui/icons-material/Work';

const items = [
  { 
    title: 'Matters',
    icon: <WorkIcon />,
    url: 'matters'
  }
]

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
      <DrawerMenu open={open} closeMenu={handleDrawerClose} openMenu={handleDrawerOpen} title={import.meta.env.VITE_APP_TITLE} width={300} items={items}>
        <Outlet />
      </DrawerMenu>
    </>
  )
}

export default DashboardLayout