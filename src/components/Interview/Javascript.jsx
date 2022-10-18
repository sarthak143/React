import { Outlet } from "react-router-dom";
import Card from "../shared/Card";

function Javascript() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            <Card width={full} title="closures">
              <ul>
                <li>
                  A function bundled with its lexical scope forms a closure. A
                  closure gives you access to an outer function's scope from an
                  inner function. In JavaScript, closures are created every time
                  a function is created, at function creation time.
                </li>

                <li>
                  <span class="text-primary fw-bold mb-1 ">Uses :</span>{" "}
                  Memoization , Currying, Data-privacy , maintaining state in
                  async world
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    Disadvantages :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
            <Card width={full} title="Types of functions">
              <ul>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    Higher Order Function :
                  </span>{" "}
                  A function that takes a function as an argument, or returns a
                  function
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    First-Class function :
                  </span>{" "}
                  When functions in a language are treated like any other
                  variable and can be passed as arguments.
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    Callback Function :
                  </span>{" "}
                  A function passed into another function as an argument, which
                  is then invoked inside the outer function to complete some
                  kind of routine or action.
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    Pure Function :
                  </span>{" "}
                  A function that always returns the same result if the same
                  arguments are passed.
                </li>
              </ul>
            </Card>{" "}
            <Card width={full} title="Currying">
              <ul>
                <li>
                  Currying is a transformation of functions that translates a
                  function from callable as{" "}
                  <span class="text-primary fw-bold mb-1 "> f(a, b, c)</span>
                  into callable as
                  <span class="text-primary fw-bold mb-1 "> f(a)(b)(c)</span>.
                </li>
                <li>
                  Currying can be used to make argument independent more
                  universal function execution. Like infinite sum function
                </li>
              </ul>
            </Card>
            <Card width={full} title="Popular methods ">
              <ul>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    parseInt(string, radix)
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 "> JSON.parse()</span>
                  When receiving data from a web server, the data is always a
                  string. JSON.parse() is synchronous can parse a string to (a)
                  JavaScript object(s)
                </li>

                <li>
                  <span class="text-primary fw-bold mb-1 "> .json() : </span>
                  json() is asynchronous and returns a Promise object that
                  resolves to a JavaScript object
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    JSON.stringify(arr) :
                  </span>
                  When sending data to a web server, the data has to be a
                  string.it Convert a JavaScript object into a string.JSON makes
                  it possible to store JavaScript objects as text.
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    {" "}
                    .toString() :{" "}
                  </span>
                  to return any type as string output , does not change the
                  original variable
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    .split(separator, limit) :
                  </span>{" "}
                  splits a string into an array of substrings.
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">.join('') : </span>
                  returns an array as a string. Any separator can be specified.
                  The default is comma (,).
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">.slice(0, 2) :</span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">
                    {" "}
                    str.substring(1, 4) :
                  </span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">.length : </span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 "> .map : </span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 ">.reduce() : </span>
                  jkbckdwb
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 "> .filter() : </span>
                  jkbckdwb
                </li>
              </ul>
            </Card>
            <Card
              width={full}
              title="Popular methods that change original Array "
            >
              <ul>
                <li>
                  <span class="text-primary fw-bold mb-1 "> .reverse()</span>.
                </li>
                <li>
                  <span class="text-primary fw-bold mb-1 "> .splice()</span>.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Javascript;
