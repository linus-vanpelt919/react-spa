import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function PostBlog() {
    const [file, setFile] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur", //入力を外すとエラーになる
        reValidateMode: "onSubmit", //二回目のバリデーションのタイミング
        criteriaMode: "all", //すべてのエラーを出す初期値はfirstError
    });
    //画像プレビュ機能
    const handleFile = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        console.log("fileReader", fileReader);
        fileReader.onload = function () {
            console.log("result", fileReader.result);
            setFile(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };
    const onSubmit = async (data) => {
        console.log(data);
        const { name, email, password } = data;
        console.log(name);
        await axios
            .post("/api/register", {
                name: name,
                email: email,
                password: password,
            })
            .then((res) => {})
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="max-w-2xl mx-auto mt-40 mb-40">
            <h1 className="text-center text-4xl font-mono text-gray-900 dark:text-gray-400">
                記事の入力
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        タイトル
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="タイトル"
                        // required
                        {...register("name", {
                            // required: {
                            //     value: true,
                            //     message: "入力が必須の項目です。",
                            // },
                            // maxLength: {
                            //     value: 20,
                            //     message: "20文字以上入力してください。",
                            // },
                        })}
                    />
                    {errors.name?.message && (
                        <div className="mt-1 text-red-500">
                            {errors.name.message}
                        </div>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                        今日あったこと
                    </label>
                    <textarea
                        id="message"
                        rows="10"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="今日あったこと..."
                    ></textarea>
                </div>
                <div className="mb-6">
                    <div className="flex justify-center items-center w-80 mx-auto">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                <svg
                                    aria-hidden="true"
                                    className="mb-3 w-10 h-10 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                onChange={handleFile}
                            />
                        </label>
                    </div>
                    <div>
                        {file && (
                            <div className="mx-auto w-80 mt-2">
                                <img
                                    className="w-full h-full object-contain"
                                    src={file}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    accept="image/*"
                    className="block ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    記事を投稿する
                </button>
            </form>
        </div>
    );
}

export default PostBlog;
