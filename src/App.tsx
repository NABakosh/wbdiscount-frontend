import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProfileBuyer from "./pages/ProfileBuyer";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileBuyer />} />
      </Route>
    </Routes>
  );
}

export default App;
