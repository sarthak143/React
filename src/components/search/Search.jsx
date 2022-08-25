import React, { useState, useEffect } from "react";
function Search() {
  var datas = [
    { name: "Zomato" },
    { name: "Kanban" },
    { name: "Error" },
    { name: "Sarthak" },
  ];

  const [searchText, setSearchText] = useState("");
  const [dataResult, setdataResult] = useState(datas);

  function setSearch(e) {
    setSearchText(e.target.value);
    finaldatas();
  }

  function finaldatas() {
    var result = datas.filter((i) => {
      return i.name.indexOf(searchText) > -1;
    });
    console.log(result);
    setdataResult(result);
  }

  return (
    <div>
      <div className="app-search dropdown d-none d-lg-block">
        <form>
          <div className="input-group">
            <input
              name="search"
              onChange={setSearch}
              value={searchText}
              type="text"
              className="form-control"
              placeholder="Search ..."
              aria-label="Recipient's username"
            />
            <span className="mdi mdi-magnify search-icon" />
            <button className="input-group-text btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        <div
          className="dropdown-menu dropdown-menu-animated dropdown-lg d-block"
          id="search-dropdown"
        >
          <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">
              Found <span className="text-danger">17</span> results
            </h5>
          </div>
          {dataResult.map((data, i) => {
            return (
              <a key={i} href="/" className="dropdown-item notify-item">
                <i className="uil-notes font-16 me-1" />
                <span>{data.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      {/* 
      <ul>
        {dataResult.map((data, i) => {
          return <li key={i}>{data.name}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default Search;
