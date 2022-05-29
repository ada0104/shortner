import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  Stack,
} from '@mui/material';
import { FC } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';

// images
import QRImage from '@app/assets/qr.svg';
import MoreImage from '@app/assets/more.svg';

// components
import {
  StyledTableHead,
  StyledTableCell,
  StyledTableRow,
} from '@app/component/table/styled-table.component';
import StyledPagination from '@app/component/table/styled-pagination.component';

interface IUrlRow {
  urlId: string;
  urlName: string;
  path: string;
  deadline: number;
  QRPath: string;
  editAt: number;
  group: string;
  editor: string;
  avatar: string;
}

interface IProps {
  rows?: Array<IUrlRow>;
  isExpired?: boolean;
}

const UrlTable: FC<IProps> = (props) => {
  const { rows, isExpired } = props;

  return (
    <>
      <TableContainer component={Paper}>
        <Table className="min-w-[1000px] table-fixed">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell>名稱</StyledTableCell>
              <StyledTableCell className="w-[200px] max-w-[200px]">
                短網址
              </StyledTableCell>
              <StyledTableCell className="w-[120px] max-w-[120px]">
                期限
              </StyledTableCell>
              {!isExpired && <StyledTableCell>QR</StyledTableCell>}

              {/* 中間空一個空間 */}
              <StyledTableCell />

              {!isExpired && <StyledTableCell>最新編輯</StyledTableCell>}

              <StyledTableCell>群組</StyledTableCell>
              <StyledTableCell>編輯者</StyledTableCell>
            </TableRow>
          </StyledTableHead>

          <TableBody>
            {rows?.map((row) => {
              const deadline = format(
                new Date(row.deadline),
                'yyyy.MM.dd HH:mm',
              );
              const editAt = format(new Date(row.editAt), 'yyyy.MM.dd');

              return (
                <StyledTableRow key={row.urlId}>
                  <StyledTableCell>
                    <div
                      className={classNames({
                        'text-secondary-gary-400': isExpired,
                      })}
                    >
                      {row.urlName}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell className="w-[200px] max-w-[200px]">
                    <div
                      className={classNames('cursor-pointer truncate', {
                        'text-secondary-gary-400 cursor-not-allowed': isExpired,
                      })}
                    >
                      {row.path}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell className="w-[120px] max-w-[120px]">
                    <div
                      className={classNames({
                        'text-secondary-gary-400': isExpired,
                      })}
                    >
                      {deadline}
                    </div>
                  </StyledTableCell>

                  {!isExpired && (
                    <StyledTableCell>
                      <a href={row.QRPath}>
                        <img src={QRImage} alt="QR" className="w-6 h-6" />
                      </a>
                    </StyledTableCell>
                  )}

                  {/* 中間空一個空間 */}
                  <StyledTableCell />

                  {!isExpired && <StyledTableCell>{editAt}</StyledTableCell>}

                  <StyledTableCell>{row.group}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex items-center">
                      <div className="w-7 h-7 min-w-[28px] rounded-full overflow-hidden mr-[10px]">
                        <img
                          src={row.avatar}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {row.editor}
                    </div>
                  </StyledTableCell>

                  <StyledTableCell>
                    <img src={MoreImage} alt="more" className="w-7 h-7" />
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} className="items-center">
        <StyledPagination count={20} />
      </Stack>
    </>
  );
};

export default UrlTable;
