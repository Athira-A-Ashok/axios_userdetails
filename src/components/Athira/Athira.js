import React, { useState, useEffect } from "react";
import axios from "axios";
import { usersURL } from "../API/APIService";
import Card from "@material-ui/core/Card";
import "./Athira.css";

function Athira() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(usersURL).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
   });

  return (
    <div className="main">
      {users.map((data, index) => {
        return (
          <Card style={{ backgroundColor: "wheat" }} className="card">
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.username}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.email}</h1>
          </Card>
        );
      })}
    </div>
  );
}

export default Athira;
