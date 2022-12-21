import { Outlet, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';

import useDocketwise from '../hooks/useDocketwise';
import useLoadscreen from '../hooks/useLoadScreen';
import useMatters from '../hooks/useMatters';

import DrawerMenu from '../components/GUI/menu/DrawerMenu';

import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';

const items = [
  { 
    title: 'Matters',
    icon: <WorkIcon fontSize='small'/>,
    url: 'matters',
    auth: true,
  },
  { 
    title: 'FOIAS',
    icon: <FolderIcon fontSize='small'/>,
    url: 'matters',
    auth: true,
  }
]

const DashboardLayout = () => {

  const { isAuth, hasAutorization, hasARedirectionURI, redirectToDocketwiseAuthorizationURI, checkDocketwiseAuthorization } = useDocketwise()
  const { hideLoadscreen } = useLoadscreen()
  const { loadAllMatters } = useMatters()

  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    checkDocketwiseAuthorization()
  }, [])

  useEffect(() => {
    redirectToDocketwiseAuthorizationURI()
  }, [hasAutorization, hasARedirectionURI])

  useEffect(() => {
    loadAllMatters()
  }, [isAuth])


  return (
    <>
      <DrawerMenu open={open} closeMenu={handleDrawerClose} openMenu={handleDrawerOpen} title={import.meta.env.VITE_APP_TITLE} items={items}>
        <Outlet />
      </DrawerMenu>
    </>
  )
}

export default DashboardLayout