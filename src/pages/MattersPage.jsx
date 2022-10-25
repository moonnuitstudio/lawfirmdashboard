import { mattersTableHeader } from '../values/tableHeaders';
import { matterTestRows } from '../values/tableTestRows';

import FilterTable from '../components/GUI/table/FilterTable';

import { 
  TableCell,
} from '@mui/material'

const MattersPage = () => {

  const createTableCell = (labelId, row) => (
    <>
      <TableCell 
        component="th"
        id={labelId}
        scope="row"
        padding="none"
      >
        {row.mattername}
      </TableCell>
      <TableCell align="right">{row.clientname}</TableCell>
      <TableCell align="right">{row.phone}</TableCell>
      <TableCell align="right">{row.email}</TableCell>
    </>
  )

  return (
    <>
      <FilterTable header={mattersTableHeader} rows={matterTestRows} title='Matters' selectAllLabel="Selected All Matters" maxRows={10} defaultColumnPivot="fat" createTableCell={createTableCell} />
    </>
  );
}

export default MattersPage