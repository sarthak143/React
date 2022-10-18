import Card from "../shared/Card";

function React() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={full} title="Lifecycle of Components">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentWillMount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    render() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidMount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>

                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentWillUnmount() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidCatch() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    componentDidUpdate (prevProps, prevState, snapshot)() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
            <Card width={full} title="React Hooks">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    usestate() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useeffect() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useRef() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    Usecontext() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    usereducer() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useMemo() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    useCallback() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
            <Card width={full} title="Lazy Loading">
              <ul>
                <li>
                  <span className="text-primary fw-bold mb-1 ">
                    usestate() :{" "}
                  </span>
                  Memory leaks as data in closure is not garbage collected
                  automatically
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default React;
