import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";

import Login from "./component/login/Login";
import Home from "./component/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
