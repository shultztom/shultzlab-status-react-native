import axios from "axios";

// Returns true if service is up
// Returns false if service is down
const getStatusByUrl = async url => {
  const config = {
    method: "GET",
    url: url
  };

  let response;
  try {
    response = await axios(config);
  } catch (error) {
    return false;
  }

  if (response.status === 200) {
    return true;
  }

  return false;
};

exports.getStatusByUrl = getStatusByUrl;
