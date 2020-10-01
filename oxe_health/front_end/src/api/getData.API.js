import axios from "./axios";

const getData = (metric) => {
  return axios.get(`get-data?metric=${metric}`);
};
export const getRoomData = (room) => {
  return axios.get(`get-data?room=${room}`);
};

export default getData;
