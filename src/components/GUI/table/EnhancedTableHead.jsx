import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';

import { useState, useMemo } from 'react';

import SelectAllIcon from '@mui/icons-material/SelectAll';
import DeselectIcon from '@mui/icons-material/Deselect';

import { 
    Box,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography,
    IconButton
  } from '@mui/material'

const EnhancedTableHead = ({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, selectAllLabel, headerCells }) => {
    const createSortHandler = (property) => (event) => { onRequestSort(event, property); };
    
    const isSelectedAll = useMemo(() => (rowCount > 0 && numSelected === rowCount), [rowCount, numSelected ])
    
    return (
        <TableHead className='pageTable'>
          <TableRow sx={{ pb:{sm: 0} }}>
            <TableCell padding="checkbox"  sx={{ px: 'auto', verticalAlign: 'bottom' }}>
              <IconButton onClick={() => onSelectAllClick(isSelectedAll)}>
                {(isSelectedAll)? (<DeselectIcon />) : (<SelectAllIcon />)}
              </IconButton>
            </TableCell>
            {headerCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
                sx={{ py:{sm: 1}, pl: 0 }}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  <Typography variant="body1" component="span" sx={{fontWeight: 'bold', fontSize: '15px', ...((orderBy === headCell.id) && {color: '#007566', fontSize: '16px'})}}>{headCell.label}</Typography>
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead