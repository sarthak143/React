/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";

function Homepage() {
  return (
    <div className="content">
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
          <div className="col-xxl-8 col-lg-6">
            <About />
          </div>
          <div className="col-lg-6 col-xxl-4">
            <Projects />
          </div>
        </div>
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default Homepage;
