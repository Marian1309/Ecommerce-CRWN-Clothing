import { Outlet, Link } from "react-router-dom";

import "./Navigation.scss";

import Logo from "../../assets/images/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="nav-link" to="/">
          <img src={Logo} alt="Logo" className="logo-container" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export { Navigation };
