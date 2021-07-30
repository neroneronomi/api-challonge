import axios from "./Instance";

//get all matches from tournament
export const GETMatches = (url) => {
  return axios
    .get(`/tournaments/${url}/matches.json`, { data: null })
    .then((res) => res)
    .catch((err) => console.error(err));
};

//get specific match from tournament
export const GETSpecificMatches = (url, matchId) => {
  return axios
    .get(`/tournaments/${url}/matches/${matchId}.json`, { data: null })
    .then((res) => res)
    .catch((err) => console.error(err));
};
