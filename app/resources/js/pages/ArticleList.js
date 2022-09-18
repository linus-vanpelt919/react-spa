import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Article() {
    const [diary, setDiary] = useState([]);
    const getDiaryData = () => {
        axios
            .get("/api/diary/index")
            .then((response) => {
                setDiary(response.data);
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
                <h1 className="text-center text-4xl font-mono text-gray-900 dark:text-gray-400 mt-10">
                    記事一覧
                </h1>
                <article className="grid grid-cols-3 gap-4 mt-5">
                    {diary.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                            >
                                <Link to={"/article/" + item.id}>
                                    {item.filename ? (
                                        <img
                                            className="rounded-t-lg w-full object-cover h-64"
                                            src={"/storage/" + item.filename}
                                            alt={item.title}
                                        />
                                    ) : (
                                        <img
                                            className="rounded-t-lg  w-full object-cover h-64"
                                            src="/img/image-1.jpg"
                                            alt="ダミー画像"
                                        />
                                    )}
                                </Link>
                                <div className="p-5">
                                    <Link to={"/article/" + item.id}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.title}
                                        </h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.contents}
                                    </p>
                                    <Link
                                        to={"/article/" + item.id}
                                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg
                                            aria-hidden="true"
                                            className="ml-2 -mr-1 w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </article>
            </div>
        </>
    );
}

export default Article;
