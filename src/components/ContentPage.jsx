/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
function ContentPage() {
  return (
    <div className="content">
      {/* <!-- Topbar Start --> */}
      <div className="navbar-custom">
        <ul className="list-unstyled topbar-menu float-end mb-0">
          <li className="dropdown notification-list d-lg-none">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              to="/"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-search noti-icon"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
              <form className="p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>
          <li className="dropdown notification-list topbar-dropdown">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              to="/"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us.jpg"
                alt="user-image"
                className="me-0 me-sm-1"
                height="12"
              />
              <span className="align-middle d-none d-sm-inline-block">
                English
              </span>{" "}
              <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">German</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Italian</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Spanish</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Russian</span>
              </Link>
            </div>
          </li>

          <li className="dropdown notification-list">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              to="/"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-bell noti-icon"></i>
              <span className="noti-icon-badge"></span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg">
              {/* <!-- item--> */}
              <div className="dropdown-item noti-title px-3">
                <h5 className="m-0">
                  <span className="float-end">
                    <Link to="/" className="text-dark">
                      <small>Clear All</small>
                    </Link>
                  </span>
                  Notification
                </h5>
              </div>

              <div
                className="px-3"
                style={{ maxHeight: "300px" }}
                data-simplebar
              >
                <h5 className="text-muted font-13 fw-normal mt-0">Today</h5>
                {/* <!-- item--> */}
                <Link
                  to="/"
                  className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2"
                >
                  <div className="card-body">
                    <span className="float-end noti-close-btn text-muted">
                      <i className="mdi mdi-close"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="notify-icon bg-primary">
                          <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 text-truncate ms-2">
                        <h5 className="noti-item-title fw-semibold font-14">
                          Datacorp{" "}
                          <small className="fw-normal text-muted ms-1">
                            1 min ago
                          </small>
                        </h5>
                        <small className="noti-item-subtitle text-muted">
                          Caleb Flakelar commented on Admin
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* <!-- item--> */}
                <Link
                  to="/"
                  className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                >
                  <div className="card-body">
                    <span className="float-end noti-close-btn text-muted">
                      <i className="mdi mdi-close"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="notify-icon bg-info">
                          <i className="mdi mdi-account-plus"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 text-truncate ms-2">
                        <h5 className="noti-item-title fw-semibold font-14">
                          Admin{" "}
                          <small className="fw-normal text-muted ms-1">
                            1 hours ago
                          </small>
                        </h5>
                        <small className="noti-item-subtitle text-muted">
                          New user registered
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>

                <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>

                {/* <!-- item--> */}
                <Link
                  to="/"
                  className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                >
                  <div className="card-body">
                    <span className="float-end noti-close-btn text-muted">
                      <i className="mdi mdi-close"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="notify-icon">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 text-truncate ms-2">
                        <h5 className="noti-item-title fw-semibold font-14">
                          Cristina Pride{" "}
                          <small className="fw-normal text-muted ms-1">
                            1 day ago
                          </small>
                        </h5>
                        <small className="noti-item-subtitle text-muted">
                          Hi, How are you? What about our next meeting
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>

                <h5 className="text-muted font-13 fw-normal mt-0">
                  30 Dec 2021
                </h5>

                {/* <!-- item--> */}
                <Link
                  to="/"
                  className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                >
                  <div className="card-body">
                    <span className="float-end noti-close-btn text-muted">
                      <i className="mdi mdi-close"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="notify-icon bg-primary">
                          <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 text-truncate ms-2">
                        <h5 className="noti-item-title fw-semibold font-14">
                          Datacorp
                        </h5>
                        <small className="noti-item-subtitle text-muted">
                          Caleb Flakelar commented on Admin
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* <!-- item--> */}
                <Link
                  to="/"
                  className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                >
                  <div className="card-body">
                    <span className="float-end noti-close-btn text-muted">
                      <i className="mdi mdi-close"></i>
                    </span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="notify-icon">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="img-fluid rounded-circle"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1 text-truncate ms-2">
                        <h5 className="noti-item-title fw-semibold font-14">
                          Karen Robinson
                        </h5>
                        <small className="noti-item-subtitle text-muted">
                          Wow ! this admin looks good and awesome design
                        </small>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="text-center">
                  <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                </div>
              </div>

              {/* <!-- All--> */}
              <Link
                to="/"
                className="dropdown-item text-center text-primary notify-item border-top border-light py-2"
              >
                View All
              </Link>
            </div>
          </li>

          <li className="dropdown notification-list d-none d-sm-inline-block">
            <Link
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              to="/"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-view-apps noti-icon"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
              <div className="p-2">
                <div className="row g-0">
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img src="assets/images/brands/slack.png" alt="slack" />
                      <span>Slack</span>
                    </Link>
                  </div>
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img src="assets/images/brands/github.png" alt="Github" />
                      <span>GitHub</span>
                    </Link>
                  </div>
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img
                        src="assets/images/brands/dribbble.png"
                        alt="dribbble"
                      />
                      <span>Dribbble</span>
                    </Link>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img
                        src="assets/images/brands/bitbucket.png"
                        alt="bitbucket"
                      />
                      <span>Bitbucket</span>
                    </Link>
                  </div>
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img
                        src="assets/images/brands/dropbox.png"
                        alt="dropbox"
                      />
                      <span>Dropbox</span>
                    </Link>
                  </div>
                  <div className="col">
                    <Link className="dropdown-icon-item" to="/">
                      <img
                        src="assets/images/brands/g-suite.png"
                        alt="G Suite"
                      />
                      <span>G Suite</span>
                    </Link>
                  </div>
                </div>{" "}
                {/* <!-- end row--> */}
              </div>
            </div>
          </li>

          <li className="notification-list">
            <Link className="nav-link end-bar-toggle" to="/">
              <i className="dripicons-gear noti-icon"></i>
            </Link>
          </li>

          <li className="dropdown notification-list">
            <Link
              className="nav-link dropdown-toggle nav-user arrow-none me-0"
              data-bs-toggle="dropdown"
              to="/"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span className="account-user-avatar">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="user-image"
                  className="rounded-circle"
                />
              </span>
              <span>
                <span className="account-user-name">Dominic Keller</span>
                <span className="account-position">Founder</span>
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
              {/* <!-- item--> */}
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <i className="mdi mdi-account-circle me-1"></i>
                <span>My Account</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <i className="mdi mdi-account-edit me-1"></i>
                <span>Settings</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <i className="mdi mdi-lifebuoy me-1"></i>
                <span>Support</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <i className="mdi mdi-lock-outline me-1"></i>
                <span>Lock Screen</span>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <i className="mdi mdi-logout me-1"></i>
                <span>Logout</span>
              </Link>
            </div>
          </li>
        </ul>
        <button className="button-menu-mobile open-left">
          <i className="mdi mdi-menu"></i>
        </button>
        <div className="app-search dropdown d-none d-lg-block">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control dropdown-toggle"
                placeholder="Search..."
                id="top-search"
              />
              <span className="mdi mdi-magnify search-icon"></span>
              <button className="input-group-text btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>

          <div
            className="dropdown-menu dropdown-menu-animated dropdown-lg"
            id="search-dropdown"
          >
            {/* <!-- item--> */}
            <div className="dropdown-header noti-title">
              <h5 className="text-overflow mb-2">
                Found <span className="text-danger">17</span> results
              </h5>
            </div>

            {/* <!-- item--> */}
            <Link to="/" className="dropdown-item notify-item">
              <i className="uil-notes font-16 me-1"></i>
              <span>Analytics Report</span>
            </Link>

            {/* <!-- item--> */}
            <Link to="/" className="dropdown-item notify-item">
              <i className="uil-life-ring font-16 me-1"></i>
              <span>How can I help you?</span>
            </Link>

            {/* <!-- item--> */}
            <Link to="/" className="dropdown-item notify-item">
              <i className="uil-cog font-16 me-1"></i>
              <span>User profile settings</span>
            </Link>

            {/* <!-- item--> */}
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
            </div>

            <div className="notification-list">
              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <div className="d-flex">
                  <img
                    className="d-flex me-2 rounded-circle"
                    src="assets/images/users/avatar-2.jpg"
                    alt="Generic placeholder image"
                    height="32"
                  />
                  <div className="w-100">
                    <h5 className="m-0 font-14">Erwin Brown</h5>
                    <span className="font-12 mb-0">UI Designer</span>
                  </div>
                </div>
              </Link>

              {/* <!-- item--> */}
              <Link to="/" className="dropdown-item notify-item">
                <div className="d-flex">
                  <img
                    className="d-flex me-2 rounded-circle"
                    src="assets/images/users/avatar-5.jpg"
                    alt="Generic placeholder image"
                    height="32"
                  />
                  <div className="w-100">
                    <h5 className="m-0 font-14">Jacob Deo</h5>
                    <span className="font-12 mb-0">Developer</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end Topbar --> */}

      {/* <!-- Start Content--> */}
      <div className="container-fluid">
        {/* <!-- start page title --> */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="d-flex">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-light"
                      id="dash-daterange"
                    />
                    <span className="input-group-text bg-primary border-primary text-white">
                      <i className="mdi mdi-calendar-range font-13"></i>
                    </span>
                  </div>
                  <Link to="/" className="btn btn-primary ms-2">
                    <i className="mdi mdi-autorenew"></i>
                  </Link>
                  <Link to="/" className="btn btn-primary ms-1">
                    <i className="mdi mdi-filter-variant"></i>
                  </Link>
                </form>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>
        {/* <!-- end page title --> */}

        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-account-multiple widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted fw-normal mt-0"
                      title="Number of Customers"
                    >
                      Customers
                    </h5>
                    <h3 className="mt-3 mb-3">36,254</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success me-2">
                        <i className="mdi mdi-arrow-up-bold"></i> 5.27%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>{" "}
                  {/* <!-- end card-body--> */}
                </div>{" "}
                {/* <!-- end card--> */}
              </div>{" "}
              {/* <!-- end col--> */}
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-cart-plus widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted fw-normal mt-0"
                      title="Number of Orders"
                    >
                      Orders
                    </h5>
                    <h3 className="mt-3 mb-3">5,543</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger me-2">
                        <i className="mdi mdi-arrow-down-bold"></i> 1.08%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>{" "}
                  {/* <!-- end card-body--> */}
                </div>{" "}
                {/* <!-- end card--> */}
              </div>{" "}
              {/* <!-- end col--> */}
            </div>{" "}
            {/* <!-- end row --> */}
            <div className="row">
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-currency-usd widget-icon"></i>
                    </div>
                    <h5
                      className="text-muted fw-normal mt-0"
                      title="Average Revenue"
                    >
                      Revenue
                    </h5>
                    <h3 className="mt-3 mb-3">$6,254</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger me-2">
                        <i className="mdi mdi-arrow-down-bold"></i> 7.00%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>{" "}
                  {/* <!-- end card-body--> */}
                </div>{" "}
                {/* <!-- end card--> */}
              </div>{" "}
              {/* <!-- end col--> */}
              <div className="col-sm-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-end">
                      <i className="mdi mdi-pulse widget-icon"></i>
                    </div>
                    <h5 className="text-muted fw-normal mt-0" title="Growth">
                      Growth
                    </h5>
                    <h3 className="mt-3 mb-3">+ 30.56%</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success me-2">
                        <i className="mdi mdi-arrow-up-bold"></i> 4.87%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>{" "}
                  {/* <!-- end card-body--> */}
                </div>{" "}
                {/* <!-- end card--> */}
              </div>{" "}
              {/* <!-- end col--> */}
            </div>{" "}
            {/* <!-- end row --> */}
          </div>{" "}
          {/* <!-- end col --> */}
          <div className="col-xl-7 col-lg-6">
            <div className="card card-h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="header-title">Projections Vs Actuals</h4>
                  <div className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Sales Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Export Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Profit
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </div>
                  </div>
                </div>

                <div dir="ltr">
                  <div
                    id="high-performing-product"
                    className="apex-charts"
                    data-colors="#727cf5,#e3eaef"
                  ></div>
                </div>
              </div>{" "}
              {/* <!-- end card-body--> */}
            </div>{" "}
            {/* <!-- end card--> */}
          </div>{" "}
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="header-title">Revenue</h4>
                  <div className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Sales Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Export Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Profit
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="chart-content-bg">
                  <div className="row text-center">
                    <div className="col-sm-6">
                      <p className="text-muted mb-0 mt-3">Current Week</p>
                      <h2 className="fw-normal mb-3">
                        <small className="mdi mdi-checkbox-blank-circle text-primary align-middle me-1"></small>
                        <span>$58,254</span>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <p className="text-muted mb-0 mt-3">Previous Week</p>
                      <h2 className="fw-normal mb-3">
                        <small className="mdi mdi-checkbox-blank-circle text-success align-middle me-1"></small>
                        <span>$69,524</span>
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="dash-item-overlay d-none d-md-block" dir="ltr">
                  <h5>Today's Earning: $2,562.30</h5>
                  <p className="text-muted font-13 mb-3 mt-2">
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper
                    ultricies nisi. Nam eget dui. Etiam rhoncus...
                  </p>
                  <Link to="/" className="btn btn-outline-primary">
                    View Statements
                    <i className="mdi mdi-arrow-right ms-2"></i>
                  </Link>
                </div>
                <div dir="ltr">
                  <div
                    id="revenue-chart"
                    className="apex-charts mt-3"
                    data-colors="#727cf5,#0acf97"
                  ></div>
                </div>
              </div>{" "}
              {/* <!-- end card-body--> */}
            </div>{" "}
            {/* <!-- end card--> */}
          </div>{" "}
          {/* <!-- end col--> */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="header-title">Revenue By Location</h4>
                  <div className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Sales Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Export Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Profit
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-4 mt-3">
                  <div id="world-map-markers" style={{ height: "224px" }}></div>
                </div>

                <h5 className="mb-1 mt-0 fw-normal">New York</h5>
                <div className="progress-w-percent">
                  <span className="progress-value fw-bold">72k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
                <div className="progress-w-percent">
                  <span className="progress-value fw-bold">39k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "39%" }}
                      aria-valuenow="39"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
                <div className="progress-w-percent">
                  <span className="progress-value fw-bold">25k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "39%" }}
                      aria-valuenow="39"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
                <div className="progress-w-percent mb-0">
                  <span className="progress-value fw-bold">61k </span>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "61%" }}
                      aria-valuenow="61"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>{" "}
              {/* <!-- end card-body--> */}
            </div>{" "}
            {/* <!-- end card--> */}
          </div>{" "}
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="header-title">Top Selling Products</h4>
                  <Link to="/" className="btn btn-sm btn-link">
                    Export <i className="mdi mdi-download ms-1"></i>
                  </Link>
                </div>
                <div className="table-responsive">
                  <table className="table table-centered table-nowrap table-hover mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">
                            ASOS Ridley High Waist
                          </h5>
                          <span className="text-muted font-13">
                            07 April 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$79.49</h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">82</h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$6,518.18</h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">
                            Marco Lightweight Shirt
                          </h5>
                          <span className="text-muted font-13">
                            25 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$128.50</h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">37</h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">
                            Half Sleeve Shirt
                          </h5>
                          <span className="text-muted font-13">
                            17 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$39.99</h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">64</h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$2,559.36</h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">
                            Lightweight Jacket
                          </h5>
                          <span className="text-muted font-13">
                            12 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$20.00</h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">184</h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">
                            Marco Shoes
                          </h5>
                          <span className="text-muted font-13">
                            05 March 2018
                          </span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$28.49</h5>
                          <span className="text-muted font-13">Price</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">69</h5>
                          <span className="text-muted font-13">Quantity</span>
                        </td>
                        <td>
                          <h5 className="font-14 my-1 fw-normal">$1,965.81</h5>
                          <span className="text-muted font-13">Amount</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
                {/* <!-- end table-responsive--> */}
              </div>{" "}
              {/* <!-- end card-body--> */}
            </div>{" "}
            {/* <!-- end card--> */}
          </div>{" "}
          {/* <!-- end col--> */}
          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="header-title">Total Sales</h4>
                  <div className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Sales Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Export Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Profit
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  id="average-sales"
                  className="apex-charts mb-4 mt-3"
                  data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"
                ></div>

                <div className="chart-widget-list">
                  <p>
                    <i className="mdi mdi-square text-primary"></i> Direct
                    <span className="float-end">$300.56</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-danger"></i> Affilliate
                    <span className="float-end">$135.18</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-success"></i> Sponsored
                    <span className="float-end">$48.96</span>
                  </p>
                  <p className="mb-0">
                    <i className="mdi mdi-square text-warning"></i> E-mail
                    <span className="float-end">$154.02</span>
                  </p>
                </div>
              </div>{" "}
              {/* <!-- end card-body--> */}
            </div>{" "}
            {/* <!-- end card--> */}
          </div>{" "}
          {/* <!-- end col--> */}
          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="header-title">Recent Activity</h4>
                  <div className="dropdown">
                    <Link
                      to="/"
                      className="dropdown-toggle arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Sales Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Export Report
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Profit
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-body py-0"
                data-simplebar
                style={{ maxHeight: "405px" }}
              >
                <div className="timeline-alt py-0">
                  <div className="timeline-item">
                    <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link to="/" className="text-info fw-bold mb-1 d-block">
                        You sold an item
                      </Link>
                      <small>
                        Paul Burgess just purchased “Hyper - Admin Dashboard”!
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">5 minutes ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link
                        to="/"
                        className="text-primary fw-bold mb-1 d-block"
                      >
                        Product on the Bootstrap Market
                      </Link>
                      <small>
                        Dave Gamache added
                        <span className="fw-bold">Admin Dashboard</span>
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">30 minutes ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link to="/" className="text-info fw-bold mb-1 d-block">
                        Robert Delaney
                      </Link>
                      <small>
                        Send you message
                        <span className="fw-bold">"Are you there?"</span>
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">2 hours ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link
                        to="/"
                        className="text-primary fw-bold mb-1 d-block"
                      >
                        Audrey Tobey
                      </Link>
                      <small>
                        Uploaded a photo
                        <span className="fw-bold">"Error.jpg"</span>
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">14 hours ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link to="/" className="text-info fw-bold mb-1 d-block">
                        You sold an item
                      </Link>
                      <small>
                        Paul Burgess just purchased “Hyper - Admin Dashboard”!
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">16 hours ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link
                        to="/"
                        className="text-primary fw-bold mb-1 d-block"
                      >
                        Product on the Bootstrap Market
                      </Link>
                      <small>
                        Dave Gamache added
                        <span className="fw-bold">Admin Dashboard</span>
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">22 hours ago</small>
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                      <Link to="/" className="text-info fw-bold mb-1 d-block">
                        Robert Delaney
                      </Link>
                      <small>
                        Send you message
                        <span className="fw-bold">"Are you there?"</span>
                      </small>
                      <p className="mb-0 pb-2">
                        <small className="text-muted">2 days ago</small>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- end timeline --> */}
              </div>{" "}
              {/* <!-- end slimscroll --> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default ContentPage;
