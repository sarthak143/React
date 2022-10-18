import Card from "../shared/Card";

function Coding() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            <Card width={half} title="Infinite currying">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/infinitecurrying.png"
              />
            </Card>
            <Card width={half} title="Fibonacci Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/fib.png"
              />
            </Card>
            <Card width={half} title="Reverse a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/reverse.png"
              />
            </Card>
            <Card width={half} title="Reverse a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/reverse.png"
              />
            </Card>
            <Card width={full} title="Search List Javascript">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/search.png"
              />
            </Card>
            <Card width={full} title="Output Based javascript question">
              <ul>
                <li>
                  console.log(1 + "2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 "> // "122"</span>
                </li>
                <li>
                  console.log(1 + +"2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"32"</span>
                </li>
                <li>
                  console.log(1 + -"1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">// 02</span>
                </li>
                <li>
                  console.log(+"1" + "1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//112</span>
                </li>
                <li>
                  console.log( "A" - "B" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"NAN2"</span>
                </li>
                <li>
                  console.log( "A" - "B" + 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">//NAN</span>
                </li>
                <li>
                  console.log(0 || 1);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(1 || 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(0 && 1);{" "}
                  <span className="text-primary fw-bold mb-1 "> // 0</span>
                </li>
                <li>
                  console.log(1 && 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 2</span>
                </li>
                <li>
                  console.log(false == '0'){" "}
                  <span className="text-primary fw-bold mb-1 "> // true</span>
                </li>
                <li>
                  console.log(false === '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>{" "}
                </li>
                <li>
                  console.log(false != '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>
                </li>
                <li>
                  console.log(false !== '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// true</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coding;
