import {
  styled,
  TableHead,
  TableCell,
  TableRow,
  tableCellClasses,
  tableHeadClasses,
} from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    fontWeight: '500',
  },

  [`&.${tableCellClasses.head}`]: {
    paddingTop: '16px',
    paddingBottom: '16px',
    fontSize: '16px',
  },

  [`&.${tableCellClasses.body}`]: {
    paddingTop: '30px',
    paddingBottom: '30px',
  },
}));

const StyledTableHead = styled(TableHead)(() => ({
  [`&.${tableHeadClasses.root}`]: {
    borderBottom: 'solid',
    borderWidth: '1.5px',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#E7EEFA',
  },
}));

export { StyledTableCell, StyledTableRow, StyledTableHead };
