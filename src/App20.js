import React from "react";
import Feed from "./Feed";
import Post from "./Post";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feed</Link> | <Link to="/post">Post</Link>
        <Routes>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/" index element={<Feed/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}