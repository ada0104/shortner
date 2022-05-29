import { FC } from 'react';

import {
  Pagination,
  PaginationItem,
  paginationItemClasses,
  styled,
} from '@mui/material';

interface IProps {
  count: number;
  page: number;
  pageChange: (event: object, page: number) => void;
}

const StyledPaginationItem = styled(PaginationItem)(() => ({
  [`&.${paginationItemClasses.root}`]: {
    borderRadius: 0,
  },

  [`&.${paginationItemClasses.selected}`]: {
    background: '#3064B9',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1877F2',
    },
  },
}));

const StyledPagination: FC<IProps> = (props) => {
  const { count, page, pageChange } = props;
  return (
    <Pagination
      count={count}
      page={page}
      onChange={pageChange}
      renderItem={(item) => {
        if (item.type === 'end-ellipsis' || item.type === 'start-ellipsis') {
          return <div className="w-12 h-[1px] bg-black" />;
        }

        return <StyledPaginationItem {...item} size="large" />;
      }}
    />
  );
};

export default StyledPagination;
