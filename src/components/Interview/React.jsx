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
            <Card width={full} title="Custom Hooks">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={full} title="Reconciliation">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={full} title="Performance improvements">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Pure Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Middleware Thunk">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Redux">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Context Api">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Reducers">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Higher order Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Class vs Functional Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Default props">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="PropTypes typechecking">
              <h5 className="text-danger">in progress</h5>
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
            <Card
              width={half}
              title="Testing Jest /enzymes /react testing library"
            >
              <h5 className="text-danger">in progress</h5>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default React;
