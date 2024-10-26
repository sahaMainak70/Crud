import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import CreateUser from "./components/CreateUser";
import ReadUser from "./components/ReadUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigator />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/read" element={<ReadUser />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
