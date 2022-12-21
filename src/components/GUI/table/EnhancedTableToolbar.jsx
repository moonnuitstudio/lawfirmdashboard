import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import { 
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import GrainIcon from '@mui/icons-material/Grain';

const EnhancedTableToolbar = ({numSelected, tableTitle}) => {
    return (
        <Toolbar sx={{
            pl: { sm: 1.3 },
            pr: { xs: 1, sm: 1 },
            pt: { sm: 1 },
            pb: { sm: .5 },
            ...(numSelected > 0 && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
          }}
        >
          {numSelected > 0 ? (
            <Typography
              sx={{ flex: '1 1 100%' }}
              color="inherit"
              variant="subtitle1"
              component="div"
              fontSize="17px !important"
            >
              {numSelected} elements selected
            </Typography>
          ) : (
            <Typography
              sx={{ flex: '1 1 100%', textTransform: 'uppercase' }}
              variant="h6"
              id="tableTitle"
              component="div"
              className='tablePageTitle'
              fontSize="22px !important"
            >
              <GrainIcon fontSize='small'/> {tableTitle}
            </Typography>
          )}
    
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar