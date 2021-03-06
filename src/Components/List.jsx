import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

function List() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://react-quiz-app-json.netlify.app/db.json");
      setUsers(res.data);
    };
    getUser();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Card user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
