import { Link } from "react-router-dom";
import Resume from "../assets/downloads/Sarthak_Resume.pdf";
import AWS from "../assets/downloads/AWS.pdf";
function Left() {
  const GAME = "https://sarthakworks.github.io/2048/";
  const EXTENSION =
    "https://chrome.google.com/webstore/detail/dark-mode-kali/chbdmdapmeflnkgibpgbdcblndooljff?hl=en-GB";
    const ANDROID = "https://play.google.com/store/apps/details?id=com.sarthakworks.zerokati";
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Files</h5>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title rounded">.PDF</span>
                  </div>
                </div>
                <div className="col ps-0">
                  <Link
                    to={Resume}
                    target="_blank"
                    download
                    className="text-muted fw-bold"
                  >
                    Resume
                  </Link>
                  <p className="mb-0">2.3 MB</p>
                </div>
               {/* <div className="col-auto">
                  {/* Button 
                  <Link
                    to={Resume}
                    target="_blank"
                    download
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="dripicons-download" />
                  </Link>
                </div>*/}
              </div>
            </div>
          </div>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src="/assets/images/aws.png"
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <Link
                    to={AWS}
                    target="_blank"
                    download
                    className="text-muted fw-bold"
                  >
                    AWS Certified Developer.pdf
                  </Link>
                  <p className="mb-0">3.25 MB</p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <Link
                    to={AWS}
                    target="_blank"
                    download
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="dripicons-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Projects</h5>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src="/assets/images/2048.jpg"
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={GAME}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    2048 GAME
                  </a>
                  <p className="mb-0">2.3 MB</p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={GAME}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src="/assets/images/dark.png"
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={EXTENSION}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    Chrome Extension
                  </a>
                  <p className="mb-0">
                    <span className="badge bg-success">
                      5 <i className="mdi mdi-star"></i>
                    </span>
                  </p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={EXTENSION}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src="/assets/images/tictactoe.png"
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={ANDROID}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    Android Game
                  </a>
                  <p className="mb-0">
                    <span className="badge bg-success">
                      5 <i className="mdi mdi-star"></i>
                    </span>
                  </p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={ANDROID}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
