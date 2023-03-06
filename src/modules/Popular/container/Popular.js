import React from "react";
import PlayerData from "../component/PlayerData";

const Popular = () => {
  return (
    <div className="page-container">
      <div className="h-one-container">
        <h1>Popular Player</h1>
      </div>
      <div>
        <PlayerData />
      </div>
    </div>
  );
};

export default Popular;
