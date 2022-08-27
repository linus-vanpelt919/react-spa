import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import MainTable from '../components/MainTable';
import { Button, Card } from "@mui/material";
import { styled } from '@mui/material/styles';
// import { makeStyles, createStyles } from '@mui/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import purple from '@mui/material/colors/purple';

//スタイルの定義
const useStyles = styled((theme) => ({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
  }));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];
//headrListの下あたりにrowsを定義する

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    //画面に到着したらgetPostsDataを呼ぶ 第二引数を[]にすることで、空配列が渡ってきたときのみ処理が走るようにする。
     useEffect(() => {
        getPostsData();
     },[]);
    //バックエンドからpostsの一覧を取得する処理
    const getPostsData = () => {
        axios.get('/api/posts')
                .then(response => {
                setPosts(response.data);
            //  console.log(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }
    //空配列として定義する
    let rows = [];
    //postsの要素ごとにrowsで使える形式に変換する
    posts.map((post) =>
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        })
    );

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

