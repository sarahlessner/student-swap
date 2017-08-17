module.exports = function(sequelize, DataTypes) {
  //create Wanted table - all non-automatic data comes from users/skills
  var Wanted = sequelize.define("Wanted", {});

  Wanted.associate = function(models) {
    // A desired skill should belong to both skills and users
    // An desired skill can't be created without a user and a skill
    
    Wanted.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Wanted.belongsTo(models.Skill, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Wanted;
};
