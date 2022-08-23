import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
// import { data } from "jquery";

/* eslint-disable jsx-a11y/alt-text */
function Zomato() {
  const [restaurantData, setrestaurantData] = useState([]);
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
    // setdata(data);
    // console.log(data);
    setrestaurantData(data.restaurants);
    // console.log(restaurantData);
    // console.log(data.restaurants);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="card">
            <form>
              <div className="mb-3">
                <div>
                  <label className="form-label">Dropdowns</label>
                  <div className="input-group">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="type"
                      aria-label
                      aria-describedby="basic-addon1"
                    />
                    <button className="btn btn-dark" type="button">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-3">
            {/* Simple card */}
            <div className="card d-block">
              <img
                className="card-img-top"
                src="assets/images/small/small-1.jpg"
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                {/* <p className="card-text">{`${data.[restaurants].0.restaurant.all_reviews.all_reviews_count}`}</p>  */}
                <p className="card-text">
                  {restaurantData.map((i) => {
                    return i.restaurant.name;
                  })}
                </p>
                <a href="/" className="btn btn-primary">
                  Button
                </a>
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Zomato;
