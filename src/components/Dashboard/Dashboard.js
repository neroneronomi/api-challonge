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

  const [showListButton, setShowListButton] = useState(false);

  const showTournamentList = () => {
    setShowListButton(true);
  };
  const hideList = () => {
    setShowListButton(false);
  };

  return (
    <div className="dashboard">
      <h1>TOURNAMET DETAILS</h1>
      <div className="buttons">
        <button onClick={showDetails}>GET</button>
        <div className="tournament__details">
          {!showListButton && (
            <button onClick={showTournamentList}>SHOW</button>
          )}
          {showListButton && (
            <TournamentDetails
              tournaments={tournaments}
              isLoading={isLoading}
              showDetails={showDetails}
              onCancel={hideList}
            />
          )}
        </div>
      </div>
      <MatchDetails />
    </div>
  );
};

export default Dashboard;
