import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import purple from '@mui/material/colors/purple';
import { styled } from '@mui/material/styles';

//スタイルの定義
const useStyles = styled((theme) => ({
  card: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),
  },
  table: {
      minWidth: 650,
    },
  tableHead: {
      backgroundColor: purple['A100'],
  },
}));

function MainTable(props) {
  //定義したスタイルを利用するための設定
  const classes = useStyles();
  const {headerList, rows} = props;
  return (
      <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
              {/* ヘッダー部分 */}
              <TableHead className={classes.tableHead}>
                  <TableRow>
                      {headerList.map((item, index) => (
                          <TableCell align="center" key={index}>{item}</TableCell>
                      ))}
                  </TableRow>
              </TableHead>
              {/* ボディ部分 */}
              <TableBody>
                  {rows.map((row, index) => (
                      <TableRow key={index}>
                          {Object.keys(row).map(function(key, i) {
                              return(
                                  <TableCell align="center" key={i}>{row[key]}</TableCell>
                              );
                          })}
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  );
}

export default MainTable;
