const jwt = require("jsonwebtoken");
const config = require("config");
const JWT_SECRET_KEY = config.get("JWT_SECRET_KEY");

const authorize = async (req, res, next) => {
  //get the user from the jwt token and add id to req object

  const bearerHeader = req.headers["authorization"];
  const bearerToken = bearerHeader.split(' ')[1];
  if (typeof bearerHeader !== "undefined") {
    try {
      const data = jwt.verify(bearerToken, JWT_SECRET_KEY);

      req.user = data.user;

      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
  } else {
    res.status(401).send({ error: "Please authenticate  using a valid token" });
  }
};

module.exports = { authorize };
