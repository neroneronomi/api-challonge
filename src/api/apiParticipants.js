import axios from "./Instance";

//get specific participant
export const GETParticipant = (url, participantId) => {
  return axios
    .get(`/tournaments/${url}/participants/${participantId}.json`, {
      data: null,
    })
    .then((res) => res)
    .catch((err) => console.error(err));
};

//get all participants from tournament
export const GETAllParticipants = (url) => {
  return axios
    .get(`/tournaments/${url}/participants.json`, { data: null })
    .then((res) => res)
    .catch((err) => console.error(err));
};
