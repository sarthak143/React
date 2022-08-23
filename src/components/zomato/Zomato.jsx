import { useEffect } from "react";

/* eslint-disable jsx-a11y/alt-text */
function Zomato() {
  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const response = await fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&q=haldiram&count=100',",
      {
        method: "Get",
        headers: {
          "user-key": "d710754ce67200fb6fb9b5e26139f50e",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <>
      <div>
        <div className="jumbotron jumbotron-billboard text-center">
          <div className="img" />
          <div className="container pt">
            <div className="text-center">
              {/* <img
                className="logo"
                src="http://image.ibb.co/g52Ayb/Go_Food_2.png"
              /> */}
            </div>
            <div className="mt-5 text-color">
              <h1>Find the best Restaurants</h1>
            </div>
            <div className="row mx-auto well col-lg-12 mt-5">
              <div className="col-xs-4 pr-0">
                <select id="select_id" className="form-control form-control-lg">
                  <option value="Select City" hidden>
                    Select City
                  </option>
                  <option value={4}>Bengaluru</option>
                  <option value={3}>Mumbai</option>
                  <option value={1}>Delhi</option>
                  <option value={6}>Hyderabad</option>
                  <option value={5}>Pune</option>
                </select>
              </div>
              <div className="col-xs-6 pl-0 pr-0">
                <input
                  id="getText"
                  type="text"
                  className="form-control"
                  placeholder="Search for Restaurant"
                />
              </div>
              <button id="getMessage" className="btn btn-success col-xs-2">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="message col-md-12" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Zomato;
