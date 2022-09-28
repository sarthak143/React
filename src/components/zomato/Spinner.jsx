function Spinner() {
  const item = [1, 2, 3, 4];
  return (
    // <div className="h-75 flex-center f-column">
    //   <div className="col-lg-8">
    //     <div className="text-center flex-center f-column ">
    //       <div class="loader"></div>
    //       <h1 className="text-error mt-4">Searching</h1>
    //     </div>
    //     {/* end /.text-center*/}
    //   </div>
    //   {/* end col*/}
    // </div>

    <>
      {item.map((value, index) => {
        return (
          <div className="col-sm-6 col-lg-4 mb-3 ">
            <div className="card border shadow-none mb-0" aria-hidden="true">
              <img
                src="assets/images/small/small-2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                  <span className="placeholder col-6" />
                  <span className="placeholder col-8" />
                </p>
                <a
                  href="#!"
                  tabIndex={-1}
                  className="btn btn-primary disabled placeholder col-6"
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Spinner;
