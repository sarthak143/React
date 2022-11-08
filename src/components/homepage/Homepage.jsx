/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import Right from "./Right";
import Left from "./Left";
import addNotification, { Notifications } from "react-push-notification";
const buttonClick = () => {
  console.log("1");
  addNotification({
    title: "Sarthak messaged you",
    subtitle: "This is a subtitle",
    message: "Click to Open this",
    theme: "darkblue",
    native: true, // when using native, your OS will handle theming.
  });
};
function Homepage() {
  return (
    <div className="content">
      <Notifications />
      {/* <!-- Start Content--> */}
      <div className="container-fluid">
        {/* <!-- start page title --> */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="d-flex">
                  <button
                    onClick={buttonClick}
                    to="/"
                    className="btn btn-primary ms-2"
                  >
                    <i className="mdi mdi-autorenew"></i>
                  </button>
                </form>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>
        {/* <!-- end page title --> */}
        <div className="row">
          <div className="col-xxl-8 col-lg-6">
            <Right />
          </div>
          <div className="col-lg-6 col-xxl-4">
            <Left />
          </div>
        </div>
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default Homepage;
