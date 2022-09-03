import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./pages/Example";
import Home from './pages/Home';
import PostEdit from './pages/PostEdit'; //追記
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/example" exact element={<Example />} />
                <Route path="/" exact element={<Home />} />
                <Route path='/post/edit/:id' exact element={<PostEdit />} />
                <Route path='/login/' exact element={<Login />} />
                <Route path='/Register/' exact element={<Register />} />
            </Routes>
        </div>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);
