import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";
import API from "./pages/API";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/API" element={<API />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
