import { Link } from "react-router-dom";
function LeftMenu() {
  return (
    <>
      <div className="leftside-menu menuitem-active">
        {/* LOGO */}
        <Link to="/" className="logo text-center logo-light">
          <span className="logo-lg">
            <img src="assets/images/logo.png" alt="user" height={50} />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo_sm.png" alt="user" height={16} />
          </span>
        </Link>
        {/* LOGO */}
        <Link to="/" className="logo text-center logo-dark">
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="user" height={16} />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo_sm_dark.png" alt="user" height={16} />
          </span>
        </Link>
        <div
          className="h-100 show"
          id="leftside-menu-container"
          data-simplebar="init"
        >
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    {/*- Sidemenu */}
                    <ul className="side-nav">
                      <li className="side-nav-title side-nav-item">Apps</li>
                      <li className="side-nav-item">
                        <Link to="zomato" className="side-nav-link">
                          <i className="uil-restaurant" />
                          <span> Zomato </span>
                        </Link>
                      </li>
                      <li className="side-nav-item">
                        <Link to="Kanban" className="side-nav-link">
                          <i className=" uil-list-ul" />
                          <span> Kanban Board </span>
                        </Link>
                      </li>
                      <li className="side-nav-item">
                        <Link to="search" className="side-nav-link">
                          <i className="uil-search" />
                          <span> Search </span>
                        </Link>
                      </li>
                      <li className="side-nav-item">
                        <Link to="error" className="side-nav-link">
                          <i className="uil-shield-exclamation" />
                          <span> Error Page </span>
                        </Link>
                      </li>
                    </ul>

                    {/* End Sidebar */}
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 1670 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: 0, display: "none" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: 37,
                transform: "translate3d(0px, 0px, 0px)",
                display: "block",
              }}
            />
          </div>
        </div>
        {/* Sidebar -left */}
      </div>
    </>
  );
}

export default LeftMenu;
