const { USERTYPES, USER_STATUS } = require("../constants");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userType: {
      type: Sequelize.ENUM(USERTYPES.ADMIN, USERTYPES.CUSTOMER),
      allowNull: false,
    },
    userStatus: {
      type: Sequelize.ENUM(USER_STATUS.PENDING, USER_STATUS.APPROVED),
    },
  });

  return User;
};
