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
            <p className="text-muted mb-4">
              I like to develop webites and I am working from past 6 years with
              various clients helping them achieving their website requirements.
              I have worked on website relating to various domains <i>viz. </i>
              Finance , Healthcare , E-commerce , Hotels , Telecom , Logistics
              etc.
            </p>

            <div className="tab-content">
              <div className="tab-pane active" id="aboutme">
                <h5 className="text-uppercase">
                  <i className="mdi mdi-briefcase me-1" />
                  Experience
                </h5>
                <div className="timeline-alt pb-0">
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">Associate technology L2</h5>
                      <p className="font-14">
                        American MNC's , Publicis Sapient
                        <span className="ms-2 font-12">
                          Year: 2021 - till now
                        </span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-3">
                        Here I worked with two Clients on Frontend part of
                        projects in agile methology Collaborate with others to
                        craft clear user stories, design tests for prototypes
                        and products, and continuously deliver product
                        enhancements. Develop high-quality, well-documented, and
                        efficient code. Align and integrate with architects,
                        designers and other stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-primary-lighten text-primary timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">
                        Application development analyst
                      </h5>
                      <p className="font-14">
                        Accenture
                        <span className="ms-2 font-12">Year: 2019 - 21</span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-3">
                        I was part of 5-member team which was responsible for
                        developing multiple websites within stringent time
                        frame. I analyzed mockups from Zeplin or PSD and realize
                        it into working website and Communicate with other
                        developers across teams in UI development.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon" />
                    <div className="timeline-item-info">
                      <h5 className="mt-0 mb-1">
                        Application development associate
                      </h5>
                      <p className="font-14">
                        Accenture
                        <span className="ms-2 font-12">Year: 2017 - 19</span>
                      </p>
                      <p className="text-muted mt-2 mb-0 pb-2">
                        I contributed to cross functional teams as a fed
                        developer here & developed quoting pages for insurance
                        websites. Worked together with Back End team to design
                        and develop functional, performing, and complete APIs
                        that work with existing company software and products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  <h5>Email</h5>
                  <p>sarthak.workplace@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* end card-body*/}
        </div>
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
                Load more
              </Link>
            </div>
          </div>
          {/* end card-body*/}
        </div>
      </div>
    </>
  );
}

export default About;
