import React, { useEffect, useState } from "react";
import "./Dashboard.css";
// import API_Res from "../../api/API_Res";
import Instance from "../../api/Instance";
import TournamentDetails from "../TournamentDetails";
import MatchDetails from "../MatchDetails";
import CreateTournament from "../CreateTournament";

const Dashboard = () => {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(0);

  const showDetails = () => {
    setUpdate(update + 1);
  };
  useEffect(() => {
    Instance.get("/tournaments", { data: null })
      .then((response) => {
        setTournaments(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  return (
    <div className="dashboard">
      <div className="buttons">
        <h1>TOURNAMET DETAILS</h1>
        <button onClick={showDetails}>GET</button>
        <button onClick={showDetails}>SHOW</button>
      </div>
      <div className="tournament__details">
        <TournamentDetails
          tournaments={tournaments}
          isLoading={isLoading}
          showDetails={showDetails}
        />
      </div>
      <MatchDetails />
    </div>
  );
};

export default Dashboard;
