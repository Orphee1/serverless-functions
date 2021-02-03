// domain domain/.netlify/functions/1-hello

// const person = { name: "hugo" };

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "Our First Netlify Function Example OK",
    // body: JSON.stringify(person), // Body MUST RETURN A STRING
  };
};
