import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import PostFrom from "../components/PostFrom";

//スタイルの定義
const useStyles = styled((theme) => ({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

function PostEdit(props) {
    const classes = useStyles();
    const {id} = useParams();

    console.log('id',id);
    // const params = props.match.params;
    const [editData, setEditData] = useState({ name: "", content: "" });

    useEffect(() => {
        getEditData();
    }, []);

    function getEditData() {
        axios
            .post("/api/edit", {
                id: id,
            })
            .then((res) => {
                setEditData(res.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    }

    function updatePost() {
        if (editData == "") {
            return;
        }
        //入力値を投げる
        axios
            .post("/api/update", {
                id: id,
                name: editData.name,
                content: editData.content,
            })
            .then((res) => {
                setEditData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function inputChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        editData[key] = value;
        let data = Object.assign({}, editData);
        setEditData(data);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>タスク編集</h1>
                        <Card className={classes.card}>
                            <PostFrom
                                data={editData}
                                inputChange={inputChange}
                                btnFunc={updatePost}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostEdit;
