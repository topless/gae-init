const URL = "api/v1/";
var axios = require("axios");

function getTest() {
  return axios.get(URL + 'test/')
    .then((res) => res.data);
}

export { getTest };
