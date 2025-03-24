import "./styles/main.scss";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Все страницы внутри MainLayout получат Header и Footer */}
      <Route element={<Layout />}>
        <Route path="/about" element={<Layout />} />
      </Route>
    </Routes>
  );
}

export default App;
