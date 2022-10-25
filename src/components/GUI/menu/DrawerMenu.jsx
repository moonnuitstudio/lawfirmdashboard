import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const openedMixin = (theme, width) => ({
    width: width,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'componentWidth',
  })(({ theme, open, componentWidth }) => ({
    background: 'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: componentWidth,
      width: `calc(100% - ${componentWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'componentWidth' })(
    ({ theme, open, componentWidth }) => ({
      width: componentWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme, componentWidth),
        '& .MuiDrawer-paper': {
            ...openedMixin(theme, componentWidth),
            boxShadow: '0px 0px 37px -20px rgba(0,0,0,0.6)',
            zIndex: theme.zIndex.drawer + 2,
        }
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': {
            ...closedMixin(theme),
        }
      }),
    }),
)
  

const DrawerMenu = ({open, closeMenu, openMenu, width, items, children, title}) => {

    const theme = useTheme();
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" open={open} componentWidth={width} elevation={0} sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={openMenu}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            color: 'black',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography variant="h6" noWrap component="div" sx={{color: 'black'}}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        <Drawer variant="permanent" open={open} componentWidth={width}>
            <DrawerHeader>
                <IconButton onClick={closeMenu}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <List>
                {items.map(item => (
                    <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => navigate(`/${item.url}`)} sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            }}
                        >
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} primaryTypographyProps={{fontSize: '1rem', textTransform: 'uppercase'}} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    )
}

DrawerMenu.defaultProps = {
    width: 300,
}  

export default DrawerMenu