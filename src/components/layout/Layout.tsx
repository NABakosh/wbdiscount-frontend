import Header from "./Header";
import { Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div className="layout">
      <Header />

      <main className="layout__content">
        {/* Outlet - место для вставки контента страниц */}
        <Outlet />
      </main>

      <h1>FOOTER</h1>
    </div>
  );
}

export default Layout;
