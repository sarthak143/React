import { Link } from "react-router-dom";
function LeftMenu() {
  return (
    <>
      <div className=" leftside-menu leftside-menu-detached show">
        {/* LOGO */}
        <div className="leftbar-user">
          <Link to="/">
            <img
              src="assets/images/users/avatar-2.png"
              alt="user"
              height={82}
              className="rounded-circle shadow-sm"
            />
            <span className="leftbar-user-name">Sarthak Bansal</span>
          </Link>
        </div>
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Navigation</li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarDashboards"
              aria-expanded="false"
              aria-controls="sidebarDashboards"
              className="side-nav-link collapsed"
            >
              <i className="uil-home-alt" />
              <span className="badge bg-success float-end">4</span>
              <span> Dashboards </span>
            </a>
            <div className="collapse" id="sidebarDashboards" style={{}}>
              <ul className="side-nav-second-level">
                <li>
                  <a href="dashboard-analytics.html">Analytics</a>
                </li>
                <li>
                  <a href="index.html">Ecommerce</a>
                </li>
              </ul>
            </div>
          </li>
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

        {/* Sidebar -left */}
      </div>
    </>
  );
}

export default LeftMenu;
