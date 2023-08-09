const Users = require("../db");

const isAdmin = (req, res, next) => {
  const userRol = Users.rol;
  if (userRol === "admin") {
    next();
  } else {
    res.status(403).json({ error: "Acceso denegado" });
  }
};

module.exports = isAdmin;
