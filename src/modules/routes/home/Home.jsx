import { Outlet } from "react-router-dom";

import { Directory } from "../../components/directory/Directory";
import Categories from "../../components/categories.json";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory categories={Categories} />
    </>
  );
};

export { Home };
