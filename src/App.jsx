import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CreatePage from "./components/CreatePosts";
import Posts from "./components/Posts";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
