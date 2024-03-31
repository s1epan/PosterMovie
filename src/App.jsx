import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      url: "https://www.omdbapi.com/?t=iron&apikey=e9895de2",
    }).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
