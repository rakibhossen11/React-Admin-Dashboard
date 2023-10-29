import React from "react";
import Cards from "../Cards/Cards";
import "./MainDash.css";
import Tables from "../Tables/Tables";


const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Tables />
    </div>
  );
};

export default MainDash;
