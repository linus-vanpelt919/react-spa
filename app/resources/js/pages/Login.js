import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur", //入力を外すとエラーになる
        reValidateMode: "onSubmit", //二回目のバリデーションのタイミング
        criteriaMode: "all", //すべてのエラーを出す初期値はfirstError
    });
    const onSubmit = async (data) => {
        const { email, password } = data;
        await axios.get("/sanctum/csrf-cookie").then((response) => {
            axios
                .post("/api/login", {
                    email: email,
                    password: password,
                })
                .then((res) => {})
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    return (
        <div className="max-w-2xl mx-auto mt-40 mb-40">
            <h1 className="text-center text-4xl font-mono text-gray-900 dark:text-gray-400">
                ログイン
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        // required
                        {...register("email", {
                            required: {
                                value: true,
                                message: "入力が必須の項目です。",
                            },
                        })}
                    />
                    {errors.email?.message && (
                        <div className="mt-1 text-red-500">
                            {errors.email.message}
                        </div>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        // required
                        {...register("password", {
                            required: {
                                value: true,
                                message: "入力が必須の項目です。",
                            },
                            pattern: {
                                value: /^[0-9A-Za-z]+$/,
                                message: "アルファベットのみ入力してください。",
                            },
                            minLength: {
                                value: 8,
                                message: "8文字以上入力してください。",
                            },
                        })}
                    />
                    {errors.password?.message && (
                        <div className="mt-1 text-red-500">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="block ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    ログイン
                </button>
            </form>
        </div>
    );
}

export default Login;
