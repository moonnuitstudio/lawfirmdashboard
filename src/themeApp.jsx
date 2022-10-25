import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// FONTS
import PoppinsTtf from './assets/fonts/Poppins/Poppins-Bold.ttf'
import NunitoTtf from './assets/fonts/Nunito_Sans/NunitoSans-Light.ttf'
import NunitoBoldTtf from './assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf'

const themeApp = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h5: {
          color: 'red'
        },
        body1: {
          fontFamily: "Nunito Sans, sans-serif",
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'Nunito Sans';
                font-style: normal;
                font-display: swap;
                font-weight: 300;
                src: local('Nunito Sans'), local('NunitoSans-Light'), url(${NunitoTtf}) format('ttf');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
          }
        }
    },
    components: {
      MuiTableHead: {
        styleOverrides: {
          root: {
            "&.pageTable":{
              
            }
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            "& .tablePageTitle":{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 700,
              fontSize: '1.7rem',
              fontFace: {
                fontFamily: 'Nunito Sans',
                fontStyle: 'bold',
                fontDisplay: "swap",
                fontWeight: 700,
                src: `local('Nunito Sans'), local('NunitoSans-Bold'), url(${NunitoBoldTtf}) format('ttf')`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF`,
              }
            }
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-style: bold;
            font-display: swap;
            font-weight: 700;
            src: local('Poppins'), local('Poppins-Bold'), url(${PoppinsTtf}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&.no-border .MuiTableCell-root.MuiTableCell-body': {
              borderBottom: 'none !important'
            },
            '&.p-4 .MuiTableCell-root.MuiTableCell-body': {
              padding: '10px 15px 10px 5px !important'
            }
          }
        }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: '15px 30px',
            color: '#8C8C8C',
            transition: 'all 0.3s linear',
            '& .MuiListItemIcon-root': {
              color: '#8C8C8C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s linear',
            },
            '& .MuiTypography-root': {
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 700,
              fontFace: {
                fontFamily: 'Nunito Sans',
                fontStyle: 'bold',
                fontDisplay: "swap",
                fontWeight: 700,
                src: `local('Nunito Sans'), local('NunitoSans-Bold'), url(${NunitoBoldTtf}) format('ttf')`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF`,
              }
            },
            '&:hover': {
              color: '#262626',
              '& .MuiListItemIcon-root': {
                color: '#262626',
              },
            }
          }, 
        }
      }
    },
});

export default themeApp