import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import VideosGrid from "./components/videoGridPage";

function App() {
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Header setList={setList} setLoading={setLoading} />
      <VideosGrid list={list} loading={loading} />
    </div>
  );
}

export default App;
