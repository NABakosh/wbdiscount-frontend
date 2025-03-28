import { Outlet } from "react-router-dom";
import Header from "./Header";

import "../../styles/Layout/footer.scss";
import "../../styles/Layout/layout.scss";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="layout ">
      <Header />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
