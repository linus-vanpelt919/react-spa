import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetail() {
    const [diary, setDiary] = useState({});
    const { id } = useParams();
    const getDiaryData = async() => {
        await axios
            .get(`/api/diary/detail/${id}`)
            .then((response) => {
                setDiary(response.data);
            })
            .catch(() => {
                console.log("通信に失敗しました");
            });
    };
    // createPostの下に記載
    const deletePost = async (diary) => {
        const {id} = diary;
        await axios
            .post('/api/diary/delete', {
            id: id
        })
        .then((res) => {
            alert('削除しました！')
        })
        .catch(error => {
            console.log(error);
        });
    }
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
                            className="w-full max-h-96 object-contain"
                            src={"/storage/" + diary.filename}
                            alt={diary.title}
                        />
                    ) : (
                        <img
                            className="w-full max-h-96 object-contain"
                            src="/img/image-1.jpg"
                            alt="ダミー画像"
                        />
                    )}
                </div>
                <h1 className="mt-10 mb-10 text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">
                    {diary.title}
                </h1>
                <p className="text-lg font-medium">{diary.contents}</p>
                <div className="flex ml-auto w-80 justify-between">
                    <Link
                        to={"/article/"}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        戻る
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
                    <Link
                        to={`/blog/edit/${id}`}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        編集
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
                    <button
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => deletePost(diary)}
                    >
                        削除
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
                    </button>
                    <Link
                        to={"/article/"}
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        一覧
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
        </>
    );
}

export default ArticleDetail;
