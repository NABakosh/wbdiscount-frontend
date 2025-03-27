import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Favourites, SellerCard, ProfileBuyer, Home } from "./pages/index";

import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileBuyer />} />
        <Route path="/profile-seller" element={<SellerCard />} />
        <Route path="/favorites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
