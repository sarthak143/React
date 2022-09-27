import React, { useState } from "react";
function Search() {
  var datas = [
    { name: "Zomato" },
    { name: "Kanban" },
    { name: "Error" },
    { name: "Sarthak" },
  ];

  const [dataResult, setdataResult] = useState(datas);
  const [isdropdown, setDropdown] = useState(false);
  function setSearch(e) {
    setdataResult(
      datas.filter((i) => {
        return i.name.toLowerCase().indexOf(e.target.value) > -1;
      })
    );
  }

  return (
    <div>
      <div className="app-search dropdown d-none d-lg-block">
        <form>
          <div className="input-group">
            <input
              name="search"
              onChange={setSearch}
              onFocus={(e) => setDropdown(true)}
              onBlur={(e) => setDropdown(false)}
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
          className={`dropdown-menu dropdown-menu-animated dropdown-lg ${
            isdropdown && "d-block"
          }`}
          id="search-dropdown"
        >
          <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">
              Found <span className="text-danger">{dataResult.length} </span>
              results
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
    </div>
  );
}

export default Search;
