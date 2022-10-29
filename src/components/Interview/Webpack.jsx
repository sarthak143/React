import { Outlet } from "react-router-dom";
import Card from "../shared/Card";
function Webpack() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="History development approach and Webpack">
              <hr />
              <h5 className="text-primary fw-bold mb-1 ">
                1. Multiple file approach
              </h5>
              <p className="container">
                multiple js files (home.js cart.js order.js *.css etc). <br />
                <span className="text-danger fw-bold">disadvantage-</span>{" "}
                Network load, Hard to manage as order of load of js files lead
                to error
              </p>
              <h5 className="text-primary fw-bold mb-1 ">
                2. Lesser files approach
              </h5>
              <p className="container">
                Single or fewer js files(index.js main.css) <br />
                <span className="text-danger fw-bold">disadvantage-</span>
                difficult to debug and read as file size increased. scopping
                issue for variables.
              </p>
              <h5 className="text-primary fw-bold mb-1 ">3. Module patterns</h5>
              <p className="container">
                {" "}
                Different way to load file.Export from one js file and import in
                other js file that make our code more modular. <br />
                <span className="text-danger fw-bold">disadvantage-</span>: it
                uses Require keyword and browser doesn't understand what is
                require. Browser support to Commonjs Module Pattern using
                Require keyword was provide by requireJs library.
              </p>
              <h5 className="text-primary fw-bold mb-1 ">4. Webpack</h5>
              <div className="container">
                <span className="text-success fw-bold">Advantage-</span>:
                <ul>
                  <li>
                    Load all types of assest (js , css, fonts, images etc)in
                    modular format
                  </li>
                  <li>Dynamically building the dependencies graph</li>
                  <li>Removing unused code in a library</li>
                  <li>Removing the duplication of code</li>
                  <li>Fetching modules at runtime(module fedration)</li>
                </ul>
              </div>
            </Card>
            <Card width={half} title="Commonjs Modules">
              <hr />

              <div className="container">
                <span className="text-success fw-bold">Export </span>

                <ol>
                  <li>
                    function Subtract(a,b) return a-b; <br />
                    function Add(a,b) return a+b; <br />
                    Module.exports = {"{"} <br />
                    Subtract:SubtractDifferentName, <br />
                    add:addDifferentName {"}"};
                  </li>
                </ol>
                <span className="text-success fw-bold">Import </span>

                <ol>
                  <li>
                    const{"{"} Subtract ,add :add2 {"}"} =
                    require("./folder/Filename");{" "}
                  </li>
                </ol>
              </div>
            </Card>{" "}
            <Card width={half} title="EcmaScript 2015 /ES6 Modules">
              <hr />

              <div className="container">
                <span className="text-success fw-bold">Export </span>

                <ol>
                  <li>default export add;</li>
                  <li>export add;</li>
                  <li>
                    export {"{"}Add, Subtract{"}"};
                  </li>
                </ol>
                <span className="text-success fw-bold">Import </span>

                <ol>
                  <li>import add as newAdd from"./path/add";</li>
                  <li>
                    import {"{"} add {"}"} from"./path/add";
                  </li>
                  <li>
                    import {"{"} Add , Subtract{"}"} from"./path/add";
                  </li>
                </ol>
              </div>
            </Card>
            <Card width={full} title="How Webpack Works?">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> Webpack</h5>
              <div className="container">
                <span className="text-success fw-bold">Dependancy graph- </span>

                <ol>
                  <li>
                    in Webpack entry file is mort important point of start.
                  </li>
                  <li>
                    once it has entry file, it searchs all the import statements
                    and require statement that u have in file
                  </li>
                  <li>
                    and start fetching all those contents(like js files , css,
                    images etc).
                  </li>
                  <li>
                    and after that if fetch files also have import statements
                    then it also fetches those files and so on.
                  </li>
                  <li>
                    in this it creates a Dependancy graph and outputs few bundle
                    files for js and css etc.
                  </li>
                </ol>
              </div>
            </Card>
            <Card width={half} title="Basic Webpack configuration">
              <hr />
              <h5 className="text-primary fw-bold mb-1 "> Webpack</h5>
              <div className="container">
                <img
                  className="img-fit"
                  alt="infinite curring"
                  width="100"
                  src="/assets/images/code/webpack/basicconfig.png"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Webpack;
