import { FC } from 'react';

import { Pagination } from '@mui/material';

interface IProps {
  count: number;
}

const StyledPagination: FC<IProps> = (props) => {
  const { count } = props;
  return <Pagination count={count} />;
};

export default StyledPagination;
