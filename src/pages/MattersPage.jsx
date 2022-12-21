import FilterTable from '../components/GUI/table/FilterTable';

import { 
  TableCell,
} from '@mui/material'

import useMatters from '../hooks/useMatters';

import { useEffect, useState } from 'react';

import { formatDate } from '../helpers';

const MattersPage = () => {
  const { matters, columnNames } = useMatters()
  
  const createTableCell = (labelId, row, rowRef) => (
    <>
      <TableCell 
        component="th"
        id={labelId}
        scope="row"
        padding="none"
        ref={rowRef}
      >
        {row.title}
      </TableCell>
      <TableCell align="right" sx={{ whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", maxWidth:"65ch" }}>{row.description}</TableCell>
      <TableCell align="right">{formatDate(row.created_at)}</TableCell>
      <TableCell align="right">{formatDate(row.updated_at)}</TableCell>
    </>
  )

  return (
    <>
      <FilterTable header={columnNames} rows={matters} title='Matters' selectAllLabel="Selected All Matters" maxRows={10} defaultColumnPivot="fat" createTableCell={createTableCell} />
    </>
  );
}

export default MattersPage