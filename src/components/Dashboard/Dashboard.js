import React, { useEffect, useState } from "react";
// import API_Res from "../../api/API_Res";
import Instance from "../../api/Instance";
import TournamentDetails from "../TournamentDetails";

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
    <div>
      <div>
        <button onClick={showDetails}>GET</button>
        <button onClick={showDetails}>SHOW</button>
      </div>
      <div>
        <TournamentDetails
          tournaments={tournaments}
          isLoading={isLoading}
          showDetails={showDetails}
        />
      </div>
    </div>
  );
};

export default Dashboard;
