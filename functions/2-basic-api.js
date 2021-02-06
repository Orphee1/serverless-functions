const items = require("../assets/data");

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
    // body: JSON.stringify(person), // Body MUST RETURN A STRING
  };
};
