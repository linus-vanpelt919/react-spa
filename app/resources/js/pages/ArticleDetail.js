import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetail() {
    const [diary, setDiary] = useState({});
    const { id } = useParams();
    const getDiaryData = () => {
        axios
            .get(`/api/diary/detail/${id}`)
            .then((response) => {
                setDiary(response.data);
                console.log("diary", response.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    };
    //画面に到着したらgetPostsDataを呼ぶ 第二引数を[]にすることで、空配列が渡ってきたときのみ処理が走るようにする。
    useEffect(() => {
        getDiaryData();
    }, []);
    return (
        <>
            <div className="px-8 mx-auto mt-32 max-w-5xl mb-32">
                <div className="w-full">
                    {diary.filename ? (
                        <img
                            className="w-full"
                            src={"/storage/" + diary.filename}
                            alt={diary.title}
                        />
                    ) : (
                        <img
                            className="w-full"
                            src="/img/image-1.jpg"
                            alt="ダミー画像"
                        />
                    )}
                </div>
                <h1 className="mt-10 mb-10 text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
                    {diary.title}
                </h1>
                <p className="text-lg font-medium">{diary.contents}</p>
            </div>
        </>
    );
}

export default ArticleDetail;
