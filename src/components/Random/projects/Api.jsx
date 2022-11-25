import React, { useState, useEffect } from "react";

export default function Api() {
  let url = "https://reqres.in/api/users?page=2";

  const [user, setuser] = useState([]);

  let getUser = async () => {
    await fetch(url)
      .then((i) => i.json())
      .then((res) =>
        setuser(
          res.data.sort((a, b) =>
            a.last_first_name > b.first_name
              ? 1
              : b.first_name > a.first_name
              ? -1
              : 0
          )
        )
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      {/* {user.map((i) => (
        <p>{i.first_name}</p>
      ))} */}

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>id</th>
          </tr>
        </thead>

        <tbody>
          {user.map((i) => (
            <tr key={i.id}>
              <td>
                {i.first_name}
                {i.last_name}
              </td>
              <td>{i.email}</td>
              <td>{i.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
