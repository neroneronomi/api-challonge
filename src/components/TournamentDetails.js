import React from "react";
import axios from "axios";

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
                <ul>
                  <li key={tournament.id}>
                    <p> Tournament Name: {tournament.attributes.name} </p>
                    <p>
                      {" "}
                      Tournament Type: {
                        tournament.attributes.tournamentType
                      }{" "}
                    </p>
                    <p> URL: {tournament.attributes.url} </p>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentDetails;
