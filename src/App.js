import "./App.css";

import Header from "./components/Header";
import AccountGeneral from "./pages/AccountGeneral";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/account" element={<AccountGeneral />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
