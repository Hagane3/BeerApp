import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
