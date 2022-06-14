import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';

// images
import QRImage from '@app/assets/qr.svg';
import MoreImage from '@app/assets/more.svg';
import TriangleImage from '@app/assets/triangle.svg';

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
  pageCount: number;
  currentPage: number;
  pageChange: (event: object, page: number) => void;
}

const UrlTable: FC<IProps> = (props) => {
  const { rows, isExpired, pageCount, currentPage, pageChange } = props;
  const [copyMessageIndex, setCopyMessageIndex] = useState<number | null>(null);
  const copyTimer = useRef<number | null>(null);

  // methods
  const copyPath = (path: string, id: number) => {
    if (isExpired) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(path).then(() => {
        setCopyMessageIndex(id);
      });
    }
  };

  useEffect(() => {
    if (copyMessageIndex !== null) {
      copyTimer.current = window.setTimeout(
        () => setCopyMessageIndex(null),
        500,
      );
    }

    return () => {
      if (copyTimer.current) {
        clearTimeout(copyTimer.current);
      }
    };
  }, [copyMessageIndex]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className="min-w-[1000px] table-fixed break-words">
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
              {/* <StyledTableCell /> */}

              {!isExpired && <StyledTableCell>最新編輯</StyledTableCell>}

              <StyledTableCell>群組</StyledTableCell>
              <StyledTableCell>編輯者</StyledTableCell>
            </TableRow>
          </StyledTableHead>

          <TableBody>
            {rows?.map((row, index) => {
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
                      onClick={() => copyPath(row.path, index)}
                      onKeyDown={() => {}}
                      role="button"
                      tabIndex={0}
                      className={classNames('cursor-pointer relative group', {
                        'text-secondary-gary-400 cursor-not-allowed': isExpired,
                      })}
                    >
                      <div className="flex items-center group min-h-[32px]">
                        <i
                          className={classNames(
                            'ri-clipboard-fill text-main-blue-300 text-2xl mr-1 hidden',
                            { 'group-hover:block': !isExpired },
                          )}
                        />
                        <Typography variant="body1" className="truncate">
                          {row.path}
                        </Typography>
                      </div>

                      {copyMessageIndex === index && (
                        <div className="absolute -top-[100%] left-1/2 -translate-x-1/2">
                          <Typography
                            variant="body1"
                            className="text-[14px] text-white font-semibold bg-black px-2 py-1 rounded-2xl"
                          >
                            COPY !
                          </Typography>

                          <img
                            src={TriangleImage}
                            alt="triangle"
                            className="w-3 h-3 absolute -mt-1 left-1/2 -translate-x-1/2"
                          />
                        </div>
                      )}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>
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
                      <a href={row.QRPath} download>
                        <img src={QRImage} alt="QR" className="w-6 h-6" />
                      </a>
                    </StyledTableCell>
                  )}

                  {/* 中間空一個空間 */}
                  {/* <StyledTableCell /> */}

                  {!isExpired && <StyledTableCell>{editAt}</StyledTableCell>}

                  <StyledTableCell>{row.group}</StyledTableCell>
                  <StyledTableCell>
                    <div className="flex items-center flex-wrap ">
                      <div className="w-7 h-7 min-w-[28px] rounded-full overflow-hidden mr-[10px]">
                        <img
                          src={row.avatar}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Typography
                        variant="body1"
                        className="break-words min-w-0"
                      >
                        {row.editor}
                      </Typography>
                    </div>
                  </StyledTableCell>

                  <StyledTableCell>
                    <img
                      src={MoreImage}
                      alt="more"
                      className="w-7 h-7 cursor-pointer"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} className="items-center mt-5">
        <StyledPagination
          count={pageCount}
          page={currentPage}
          pageChange={pageChange}
        />
      </Stack>
    </>
  );
};

export default UrlTable;
