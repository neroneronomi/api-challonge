import axios from "axios";

useEffect(() => {
  axios({
    url: "https://api.labs.challonge.online/v2/tournaments.json",
    method: "GET",
    data: {},
    headers: {
      "Authorization-Type": "v1",
      Authorization: "eQXMZXuluLypEUC7ZLr0Ejr2emS3zfpMvVVv2iiO",
      "Content-Type": "application/vnd.api+json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      setTournaments(response.data?.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
