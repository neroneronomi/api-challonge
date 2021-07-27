import React from "react";
import axios from "axios";

const TournamentDetails = () => {
  console.log("TournaDetails Test");
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

  return <></>;
};

export default TournamentDetails;
