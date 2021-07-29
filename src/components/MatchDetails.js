import React from "react";
import axios from "axios";

const MatchDetails = () => {
  console.log("MATCH DETAILS");
  axios({
    url: "https://api.challonge.com/v1/tournaments/https://challonge.com/mumble_nero/matches/{match_id}/attachments.{json|xml}",
    method: "GET",
    data: "",
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/json",
      "Authorization-Type": "v1",
      Authorization: "jOTnC6gR0LRSXPAF5ukbzMIWP51OPVQqVqIjXBYt",
      //   url: "https://challonge.com/mumble_nero",
    },
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return <div>Match Details</div>;
};

export default MatchDetails;
