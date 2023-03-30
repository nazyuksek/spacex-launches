import axios from "axios";

export async function getLaunches() {
  const URL = "https://api.spacexdata.com/v5";
  return axios
    .get(`${URL}/launches`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      return e;
    });
}
