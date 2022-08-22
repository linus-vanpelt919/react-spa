import React from "react";
import ReactDOM from "react-dom";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
// import { makeStyles, createStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import purple from '@mui/material/colors/purple';

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

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
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
                                        <TableRow>
                                            <TableCell align="center">モーリー</TableCell>
                                            <TableCell align="center">肩トレ</TableCell>
                                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">ドンキーコング</TableCell>
                                            <TableCell align="center">バナナ補給</TableCell>
                                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

