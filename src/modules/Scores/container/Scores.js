import React from "react";
import ScoresTable from "../component/ScoresTable";

const Scores = () => {
  return (
    <div className="page-container">
      <div className="h-one-container">
        <h1>Scores</h1>
      </div>
      <ScoresTable />
    </div>
  );
};

export default Scores;
