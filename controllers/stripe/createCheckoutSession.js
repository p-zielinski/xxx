const sessionStore = require("../../services/sessionStore");

const createCheckoutSession = async (req, res) => {
  //...
  sessionStore.set('sessionId', 'sessionKey');
  //...
};

module.exports = createCheckoutSession;
