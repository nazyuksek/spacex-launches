import axios from "axios";

export async function getLaunches() {
  const URL = "https://api.spacexdata.com/v5";
  return axios
    .get(`${URL}/launches`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}

export async function getLaunchDetails(id: string) {
  const URL = "https://api.spacexdata.com/v5/launches/" + id;
  return axios
    .get(`${URL}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}
