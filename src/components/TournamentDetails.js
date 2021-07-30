import React from "react";
import axios from "axios";
import "./Dashboard/Dashboard";
const TournamentDetails = (props) => {
  console.log("Tournament Details Test");
  axios({
    url: "https://api.challonge.com/v2/tournaments.json",
    method: "GET",
    data: null,
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/json",
      "Authorization-Type": "v1",
      Authorization: "jOTnC6gR0LRSXPAF5ukbzMIWP51OPVQqVqIjXBYt",
    },
  })
    .then((res) => console.log(res.data.data))
    .catch((error) => console.log(error));

  return (
    <div>
      <div>
        {props.isLoading && <div>Loading...</div>}
        {!props.isLoading && (
          <div>
            {props.tournaments.data.data.map((tournament) => {
              return (
                <div className="tournament__list">
                  <ul>
                    <li key={tournament.id}>
                      <p>
                        {" "}
                        <h2>Event Name:</h2> {tournament.attributes.name}{" "}
                      </p>
                      <p>
                        {" "}
                        <h2>Tournament Type:</h2>{" "}
                        {tournament.attributes.tournamentType}{" "}
                      </p>
                      <p>
                        {" "}
                        <h2>URL:</h2>{" "}
                        {`challonge.com/${tournament.attributes.url}`}{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentDetails;
