import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [data, setData] = useState([]);

  const handleMovies = (str) => {
    axios({
      url: `https://www.omdbapi.com/?s=${str}&apikey=e9895de2`,
    }).then((res) => setData(res.data.Search));
  };

  useEffect(() => {
    axios({
      url: `https://www.omdbapi.com/?s=iron&apikey=e9895de2`,
    }).then((res) => setData(res.data.Search));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Content movies={data} func={handleMovies} />
      <Footer />
    </>
  );
}

export default App;
