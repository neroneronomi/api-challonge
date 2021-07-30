import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Dashboard.css";
// import API_Res from "../../api/API_Res";
import Instance from "../../api/Instance";
import TournamentDetails from "../TournamentDetails";
import MatchDetails from "../MatchDetails";

const Dashboard = () => {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(0);
  const history = useHistory();

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

  const handleClick = (e) => {
    e.preventDefault()
    history.push("/tournament")
  }

  return (
    <div className="dashboard">
      <h1>TOURNAMET DETAILS</h1>
      <div className="buttons">
        <button onClick={handleClick}>CREATE</button>
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
