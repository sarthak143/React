import { Outlet } from "react-router-dom";
import Card from "../shared/Card";
function Reactcode() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="Lifecycle of Components">
              <iframe
                title="11"
                src="https://stackblitz.com/edit/react-dgdcex?embed=1&file=src/App.js&theme=dark&view=editor"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reactcode;
