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
              <div className="row container">
                <ul className="col-6">
                  <li>Memoize React Components</li>
                  <li>
                    Use Sprite image to minimise api calls for different icons
                  </li>
                  <li>
                    Use Pure components using React.PureComponent in class
                    components with custom shouldComponentUpdate method
                  </li>
                  <li>
                    we should React.memo with functional components. this way
                    renders doesnt run again and again is props passed to it are
                    not changed instead it will return cached value.
                  </li>
                  <li>using lazy loading</li>
                  <li>
                    {" "}
                    Using Web Workers for CPU Extensive Tasks. it run a script
                    operation in a web application’s background thread, separate
                    from the main execution thread.
                  </li>
                </ul>
                <ul className="col-6">
                  <li>
                    Use React.Fragments to Avoid Additional HTML Element
                    Wrappers
                  </li>
                  <li>Throttling and Debouncing Event Action in JavaScript</li>
                  <li>
                    use CDN like Akamai ,cloudflare to deliver static content
                    from your website as it uses users geographic location. CDN
                    closest to user is edge server.
                  </li>
                  <li>
                    spliting main chunk in production to smaller chunks using
                    webpack SplitChunksPlugin. we can consider having two
                    separate files by separating vendor, or third-party library
                    code from the application code.
                  </li>
                  <li>minify various files </li>
                </ul>
              </div>
            </Card>
            <Card width={full} title="Performance improvements">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={full} title="Reconciliation">
              <p>
                React keeps in-memory virtual dom in sync with actual dom using
                Batch update this process is called reconcilliation
              </p>
              <p className="text-primary">
                Dom ->virtual dom & current virtual dom-> diffing algo-> various
                changes accumulated-> Batch update-> change to origincal Dom
              </p>
              <p>
                React donot update Dom tree directly, It creates an in-memory
                replica of dom known as virtual tree. Whenever there is a update
                to a node, React creates a second virtual dom with updated node
                and subtree. Then it do a diff between previous and current
                virtual dom to identify what are exact changes. After
                identifying exact change it then update only that change in
                original dom using batch update. This changes from virtual dom
                to Dom are done through Batch update. React accumulates various
                changes to various nodes through diffing between two virtual
                doms. And these changes are applied to DOM using batch update
              </p>
              <p>
                <span className="text-primary">Advantage : </span>fast reactive
                website as we donot have to re-render dom again and again for
                all changes. Also we are updating dom at a particular frequency
                due to batch update.
              </p>
            </Card>
            <Card width={half} title="Pure Components">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Middleware Thunk">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={full} title="Redux">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <h5 className="text-primary">
                        Create A store and reducer
                      </h5>
                      <img
                        className="img-fit"
                        alt="infinite curring"
                        width="100"
                        src="/assets/images/code/react/reduxStore.png"
                      />
                    </li>
                    <li>
                      <h5 className="text-primary">
                        Wrap app inside Provider by importing from react-redux
                      </h5>
                      <img
                        className="img-fit"
                        alt="infinite curring"
                        width="100"
                        src="/assets/images/code/react/reduxApp.png"
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <li>
                        <h5 className="text-primary">
                          in component use useSelector hook to acces the state
                        </h5>{" "}
                        <h5 className="text-primary">
                          useDispatch is used to dispatch Action with payload
                        </h5>
                        <img
                          className="img-fit"
                          alt="infinite curring"
                          width="100"
                          src="/assets/images/code/react/reduxComponent.png"
                        />
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card width={half} title="Context Api">
              <ol>
                <li>
                  Create a context using createContext() and pass the initial
                  state as arguments. Context can also be defined without
                  passing any arguments.
                </li>
                <li>
                  Define a function that will deliver the data through the
                  Provider.
                </li>
                <li>
                  Using useReducer() hook accepts a Reducer with the default
                  state, then returns the updated state and dispatches a
                  function.
                </li>
                <li>
                  Inside the provider function, use useReducer() and pass the
                  Reducer and the initial state as arguments. The state returned
                  and dispatch are then passed as values in the Provider.
                </li>
              </ol>
            </Card>
            <Card width={full} title="Redux vs Context Api">
              <p>
                To solve the prop drilling issue, we have State Management
                Solutions like Context API and Redux
              </p>
              <h5>
                Context API: Resourceful and ideal for small applications where
                state changes are minimal
              </h5>
              <h5>
                Redux: Perfect for larger applications where there are
                high-frequency state updates
              </h5>
              <div className="row">
                <div className="col-6">
                  <h5 className="text-primary">Redux</h5>
                  <ul>
                    <li>Redux comprise mainly of are Action Reducer Store</li>
                    <li>
                      Redux requires adding more libraries to the application
                      bundle that increase bundle size.
                    </li>
                    <li>Work perfectly with both static and dynamic data</li>
                    <li>
                      Easily extendible due to the ease of adding new
                      data/actions after the initial setup
                    </li>
                    <li>
                      Redux only re-renders the updated components. This can be
                      monitored on the console as there's a log in each
                      component.
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5 className="text-primary">Context Api</h5>
                  <ul>
                    <li>
                      Context API is easy to is use as it has a short learning
                      curve. It requires less code, and because there's no need
                      of extra libraries, bundle sizes are reduced.{" "}
                    </li>
                    <li>
                      Specifically designed for static data, that is not often
                      refreshed or updated
                    </li>
                    <li>Adding new contexts requires creation from scratch</li>
                    <li>
                      Context API prompts a re-render on each update of the
                      state and re-renders all components regardless
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card width={half} title="Reducers">
              <h5 className="text-danger">in progress</h5>
            </Card>
            <Card width={half} title="Higher order Components">
              <p>
                A higher-order component (HOC) is an advanced technique in React
                for reusing component logic.in other words, a higher-order
                component is a function that takes a component and returns a new
                component.
              </p>
            </Card>
            <Card width={half} title="Class vs Functional Components">
              <h5 className="text-danger">in progress</h5>
            </Card>

            <Card width={half} title="PropTypes typechecking | Default props">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/react/type_default.png"
              />
            </Card>
            <Card width={full} title="Lazy Loading">
              <div className="row">
                <ul className="col-6">
                  <p>
                    It is a concept or a way to dynamically load a part of code
                    only when it is required. It is also referred to as code
                    splitting and data fetching.
                  </p>
                  <h5 className="text-primary">Implementation:</h5>{" "}
                  <li>
                    <span className="text-primary"> react.lazy()</span>-
                    function in react that lets you load react components lazily
                    through code splitting without help from any additional
                    libraries.
                  </li>
                  <li>
                    <span className="text-primary">Suspense</span>- Suspense -
                    is used to wrap lazy components. Multiple lazy components
                    can be wrapped with the suspense component.
                  </li>
                  <li>
                    <span className="text-primary"> fallback</span>- - suspense
                    take a fallback property to render whle our lazy component
                    is loading on slow network.
                  </li>
                </ul>
                <ul className="col-6">
                  <img
                    className="img-fit"
                    alt="infinite curring"
                    width="100"
                    src="/assets/images/code/react/lazy.png"
                  />
                </ul>
              </div>
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
