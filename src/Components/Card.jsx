import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div>
      <Link to={`/${user.id}`}>{user.questions} </Link>
    </div>
  );
};

export default Card;
