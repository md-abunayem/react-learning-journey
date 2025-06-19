import React from "react";
import { useState } from "react";

import { useParams, useSearchParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const User = () => {
  const { userId } = useParams();

  //query parameter
  const [queryParam, setQueryParam] = useSearchParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryParam({ id: id, name: name });
  };

  return (
    <div>
      <PageTitle title="User"></PageTitle>
      User
      <h1>Route param: {userId}</h1>
      {/*This route parameter will show when you will enter userId after -> /user/userId-> /user/101 at the browser url*/}
      {/* Set Query Parameter */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label for="id">Id:</label>
          <input
            type="text"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit">Find User</button>
      </form>
      {/* Get query parameter */}
      <h1>Query Parameter using Id:{queryParam.get("id")}</h1>{" "}
      {/*if you want to see the query parameter, you need to place url like this at the search bar->>>http://localhost:5173/user?id=91919*/}
      {/* for multiple query parameter */}
      <h1>Query Parameter using name: {queryParam.get("name")}</h1>
      {/* http://localhost:5173/user?id=91919&name=nayem */}
    </div>
  );
};

export default User;
