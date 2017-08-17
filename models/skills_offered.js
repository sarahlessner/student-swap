module.exports = function(sequelize, DataTypes) {
  //create offered table - all non-automatic data comes from users/skills
  var Offered = sequelize.define("Offered", {});

  Offered.associate = function(models) {
    // An offer should belong to both skills and users
    // An offer can't be created without a user and a skill
    
    Offered.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Offered.belongsTo(models.Skill, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Offered;
};
