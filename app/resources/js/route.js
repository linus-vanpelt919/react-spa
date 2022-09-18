import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./pages/Example";
import Home from "./pages/Home";
import PostEdit from "./pages/PostEdit"; //追記
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostBlog from "./pages/PostBlog";
import EditBlog from "./pages/EditBlog";
import ArticleList from "./pages/ArticleList";
import ArticleDetail from "./pages/ArticleDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/example" exact element={<Example />} />
                <Route path="/" exact element={<Home />} />
                <Route path="/post/edit/:id" exact element={<PostEdit />} />
                <Route path="/login/" exact element={<Login />} />
                <Route path="/register/" exact element={<Register />} />
                <Route path="/blog/" exact element={<PostBlog />} />
                <Route path="/blog/edit/:id" exact element={<EditBlog />} />
                <Route path="/article/" exact element={<ArticleList />} />
                <Route path="/article/:id" exact element={<ArticleDetail />} />
            </Routes>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <App />
        <Footer />
    </BrowserRouter>,
    document.getElementById("app")
);
