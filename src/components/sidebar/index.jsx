import React, { useState } from "react";
import Data from "../../utilities/sidebarData.json";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isParentId, setIsParentId] = useState(1);
  const [isActive, setIsActive] = useState(0);
  const handleActiveMenu = (parentIndex, activeMenuIndex) => {
    setIsActive(activeMenuIndex);
    setIsParentId(parentIndex);
  };
  return (
    <div className="col-auto w-270 px-sm-2 px-0 bg-light sidebar-wrapper">
      <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white custom-h">
        <ul
          className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          {Data &&
            Data.map((menus) => (
              <div key={menus.id}>
                {menus.main && (
                  <p className="mb-1 d-none d-sm-inline" key={menus.id}>
                    <span className="menu-title text-dark font-14">
                      {menus.label}
                    </span>
                  </p>
                )}
                {!!menus.subMenu &&
                  menus.subMenu.map((menu, index) => (
                    <li
                      className={`${
                        isParentId === menus.id && isActive === index
                          ? "active"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleActiveMenu(menus.id, index)}
                    >
                      <Link
                        to={`${menus.route}${menu.route}`}
                        className="nav-link px-0 align-middle"
                      >
                        <img
                          src={`/static/img/side-menu-icons/${menu.icons}`}
                          className={`${
                            isParentId === menus.id && isActive === index
                              ? "me-2 active-tab"
                              : "me-2"
                          }`}
                        />
                        <span
                          className={`${
                            isParentId === menus.id && isActive === index
                              ? "ms-1 d-none d-sm-inline text-dark"
                              : "ms-1 d-none d-sm-inline"
                          }`}
                        >
                          {menu.label}
                        </span>{" "}
                      </Link>
                    </li>
                  ))}
              </div>
            ))}
        </ul>

        <ul className="ps-0">
          <li>
            <Link to="/" className="ps-2" style={{ fontSize: "14px" }}>
              Terms of Service . Privacy Policy
            </Link>
          </li>
        </ul>

        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
