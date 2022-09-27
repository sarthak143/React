import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <div className="card d-block">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3>Career Highlight</h3>
              <div className="dropdown">
                <Link
                  to="/"
                  className="dropdown-toggle arrow-none card-drop"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="dripicons-dots-3" />
                </Link>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  data-popper-placement="top-end"
                  style={{
                    position: "absolute",
                    inset: "auto 0px 0px auto",
                    margin: 0,
                    transform: "translate3d(-0.00401306px, -30.544px, 0px)",
                  }}
                >
                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-pencil me-1" />
                    Edit
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-delete me-1" />
                    Delete
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-email-outline me-1" />
                    Invite
                  </Link>

                  <Link to="/" className="dropdown-item">
                    <i className="mdi mdi-exit-to-app me-1" />
                    Leave
                  </Link>
                </div>
              </div>
              {/* project title*/}
            </div>
            <div className="badge bg-secondary text-light mb-3">
              Front End Developer
            </div>

            <h5>Sarthak Bansal</h5>
            <p className="text-muted mb-2">
              I like to develop webites and I am working from past 6 years with
              various clients helping them achieving their website requirements.
              I have worked on website relating to various domains <i>viz. </i>
              Finance , Healthcare , E-commerce , Hotels , Telecom , Logistics
              etc.
            </p>
            <p className="text-muted mb-4">
              Voluptates, illo, iste itaque voluptas corrupti ratione
              reprehenderit magni similique? Tempore, quos delectus asperiores
              libero voluptas quod perferendis! Voluptate, quod illo rerum?
              Lorem ipsum dolor sit amet. With supporting text below as a
              natural lead-in to additional contenposuere erat a ante.
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-4">
                  <h5>Career Start Date</h5>
                  <p>
                    24 January 2017
                    {/* <small className="text-muted">1:00 PM</small> */}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <h5>End Date</h5>
                  <p>
                    22 December 2018{" "}
                    <small className="text-muted">1:00 PM</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <h5>Budget</h5>
                  <p>$15,800</p>
                </div>
              </div>
            </div>
            <div id="tooltip-container">
              <h5>Team Members:</h5>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="Mat Helme"
              >
                <img
                  src="assets/images/users/avatar-6.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="Michael Zenaty"
              >
                <img
                  src="assets/images/users/avatar-7.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="James Anderson"
              >
                <img
                  src="assets/images/users/avatar-8.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="Mat Helme"
              >
                <img
                  src="assets/images/users/avatar-4.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="Michael Zenaty"
              >
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
              <Link
                to="/"
                data-bs-container="#tooltip-container"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                className="d-inline-block"
                data-bs-original-title="James Anderson"
              >
                <img
                  src="assets/images/users/avatar-3.jpg"
                  className="rounded-circle img-thumbnail avatar-sm"
                  alt="friend"
                />
              </Link>
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>{" "}
        {/* end card*/}
        <div className="card">
          <div className="card-body">
            <h4 className="mt-0 mb-3">Comments (258)</h4>
            <textarea
              className="form-control form-control-light mb-2"
              placeholder="Write message"
              id="example-textarea"
              rows={3}
              defaultValue={""}
            />
            <div className="text-end">
              <div className="btn-group mb-2">
                <button
                  type="button"
                  className="btn btn-link btn-sm text-muted font-18"
                >
                  <i className="dripicons-paperclip" />
                </button>
              </div>
              <div className="btn-group mb-2 ms-2">
                <button type="button" className="btn btn-primary btn-sm">
                  Submit
                </button>
              </div>
            </div>
            <div className="d-flex align-items-start mt-2">
              <img
                className="me-3 avatar-sm rounded-circle"
                src="assets/images/users/avatar-3.jpg"
                alt="Generic placeholder "
              />
              <div className="w-100 overflow-hidden">
                <h5 className="mt-0">Jeremy Tomlinson</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
                <div className="d-flex align-items-start mt-3">
                  <Link className="pe-3" to="/">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="avatar-sm rounded-circle"
                      alt="Generic placeholder "
                    />
                  </Link>
                  <div className="w-100 overflow-hidden">
                    <h5 className="mt-0">Kathleen Thomas</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <Link to="/" className="text-danger">
                Load more{" "}
              </Link>
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>
      </div>
    </>
  );
}

export default About;
