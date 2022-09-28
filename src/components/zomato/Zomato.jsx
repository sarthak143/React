import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import InitialPage from "./Initialpage";
import Spinner from "./Spinner";
import SearchResult from "./SearchResult";
// import { data } from "jquery";

/* eslint-disable jsx-a11y/alt-text */
function Zomato() {
  const [restaurantData, setrestaurantData] = useState([]);
  const [city, setCity] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState([]);
  function handleSearch(e) {
    setSearchText(e.target.value);
    // console.log(searchText);
  }
  const getResult = async (id, item) => {
    setSearching(true);
    const response = await fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=${item}&count=100',`,
      {
        method: "Get",
        headers: {
          "user-key": "d710754ce67200fb6fb9b5e26139f50e",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const data = await response.json();
    setrestaurantData(data.restaurants);
    setSearching(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#!">Homepage</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#!">Apps</a>
                  </li>
                  <li className="breadcrumb-item active">Zomato</li>
                </ol>
              </div>
              <h4 className="page-title">Restaurant search app</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="card  text-center">
              <div className="card-body bg-primary">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  className="rounded-circle avatar-lg img-thumbnail"
                  alt="profile"
                />
                <h4 className="mb-0 text-white mt-2">
                  Find the best Restaurants
                </h4>
                <p className="text-white font-14">Food </p>
              </div>
              <div className="card-body ">
                <div className="app-search">
                  <form>
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
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setCity(1);
                          }}
                          href="#!"
                        >
                          Delhi
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setCity(3);
                          }}
                          href="#!"
                        >
                          Mumbai
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setCity(6);
                          }}
                          href="#!"
                        >
                          Hyderabad
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setCity(5);
                          }}
                          href="#!"
                        >
                          Pune
                        </a>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            setCity(4);
                          }}
                          href="#!"
                        >
                          Bangalore
                        </a>
                      </div>

                      <input
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                        onChange={handleSearch}
                      />
                      {/* <span className="mdi mdi-magnify search-icon" /> */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(city);
                          console.log(searchText);
                          getResult(city, searchText);
                        }}
                        className="input-group-text btn btn-dark"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <hr></hr>

                <div className="text-start mt-3">
                  <h4 className="font-13 text-uppercase">Recent Searches</h4>
                  <p className="text-muted mb-2 font-13">
                    <a
                      onClick={() => getResult(1, "chai")}
                      href="#!"
                      className="btn btn-sm btn-link text-info font-13"
                    >
                      <i className="mdi mdi-magnify"></i> Chai (Delhi)
                    </a>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <a
                      onClick={() => getResult(4, "Dosa")}
                      href="#!"
                      className="btn btn-sm btn-link text-info font-13"
                    >
                      <i className="mdi mdi-magnify"></i> Dosa (Bangalore)
                    </a>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <a
                      onClick={() => getResult(3, "pav")}
                      href="#!"
                      className="btn btn-sm btn-link text-info font-13"
                    >
                      <i className="mdi mdi-magnify"></i> Vada pav (Mumbai)
                    </a>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <a
                      onClick={() => getResult(5, "icecream")}
                      href="#!"
                      className="btn btn-sm btn-link text-info font-13"
                    >
                      <i className="mdi mdi-magnify"></i> Ice-Cream (Pune)
                    </a>
                  </p>
                  <p className="text-muted mb-2 font-13">
                    <a
                      onClick={() => getResult(6, "idli")}
                      href="#!"
                      className="btn btn-sm btn-link text-info font-13"
                    >
                      <i className="mdi mdi-magnify"></i> Idli sambhar
                      (Hyderabad)
                    </a>
                  </p>
                </div>
              </div>
              {/* end card-body */}
            </div>
          </div>

          <div className="col-xl-8 col-lg-7">
            <div className="row">
              {searching ? (
                <Spinner />
              ) : restaurantData.length > 0 ? (
                <SearchResult restaurantData={restaurantData} />
              ) : (
                <InitialPage />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Zomato;
