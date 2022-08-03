import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import Users from "../pages/Users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
