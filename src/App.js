import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/articles-list" element={<ArticlesList />}></Route>
          <Route path="/article" element={<Article />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
