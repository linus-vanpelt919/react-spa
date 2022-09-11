import React, { useState, useEffect } from "react";

function ArticleDetail() {
    return (
        <>
            <div className="px-8 mx-auto mt-32 max-w-5xl mb-32">
                <div className="w-full">
                  <img className="w-full" src="/img/image-1.jpg" alt="" />
                </div>
                <h1 className="mt-10 mb-10 text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl">タイトル</h1>
                <p className="text-lg font-medium">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
            </div>
        </>
    );
}

export default ArticleDetail;
