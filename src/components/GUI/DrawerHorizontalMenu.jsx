import { styled, useTheme  } from '@mui/material/styles'

import MuiAppBar from '@mui/material/AppBar';
import { 
    Box, 
    Toolbar, 
    IconButton, 
    Typography, 
    Drawer, 
    Divider, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// MAIN CONTAINER
const Container = styled('section', { shouldForwardProp: (prop) => prop !== 'open' || prop !== 'elementwidth' })
(({ theme, open, elementwidth }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${elementwidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    })
}))

// APPBAR
const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open' || prop !== 'elementwidth',})
(({ theme, open, elementwidth }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${elementwidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}))

// Header
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}))

const DrawerHorizontalMenu = ({ open, openMenu, closeMenu, width, title, children }) => {
    const theme = useTheme();

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position='fixed' open={open} elementwidth={width}>
                <Toolbar>
                    <IconButton color="inherit"  onClick={openMenu} edge="start" sx={{mr: 2, ...(open && { display: 'none' })}}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* ----------------------- */}
            <Drawer sx={{
                width: width,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: width,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor='left'
            open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={closeMenu}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
            </Drawer>
            <Container open={open} elementwidth={width}>
                <DrawerHeader />
                {children}
            </Container>
        </Box>
    )
}

DrawerHorizontalMenu.defaultProps = {
    width: 300,
}  

export default DrawerHorizontalMenu