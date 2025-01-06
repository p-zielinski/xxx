const sessionStore = require("../../services/sessionStore");

const getCheckoutSessionDetails = async (req, res) => {
  //..
  const goodSessionKey = sessionStore.get('sessionId');
  //..
};

module.exports = getCheckoutSessionDetails;
