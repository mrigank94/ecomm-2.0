const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../configs/auth.config");
const { USERTYPES } = require("../constants");

function verifyJwt(req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    res.status(401).send({
      message: "No access token provided",
    });
    return;
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Access token is invalid",
      });
      return;
    }

    req.userId = decoded.userId;
    req.userType = decoded.userType;
  });
  next();
}

function verifyAdmin(req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    res.status(401).send({
      message: "No access token provided",
    });
    return;
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Access token is invalid",
      });
      return;
    }

    if (decoded.userType === USERTYPES.ADMIN) {
      req.userId = decoded.userId;
      req.userType = decoded.userType;
      next();
    } else {
      res.status(403).send({
        message: "User is not an admin",
      });
      return;
    }
  });
}

module.exports = {
  verifyJwt,
  verifyAdmin,
};
