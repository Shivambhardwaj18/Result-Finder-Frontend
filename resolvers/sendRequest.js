const axios = require("axios");

const sendRequest = async (r_no) => {
  const result = await axios.get(
    `http://proedge.me/test.php?rollnumber=${r_no}`
  );

  return result.data;
};

module.exports = {
  sendRequest,
};
