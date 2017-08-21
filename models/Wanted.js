module.exports = function(sequelize, DataTypes) {
  //create Wanted table - all non-automatic data comes from users/skills
  var Wanted = sequelize.define("Wanted", {
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    },
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    }
  });

  Wanted.associate = function(models) {
    // A desired skill should belong to both skills and users
    // A desired skill can't be created without a user and a skill
    // and what the user wants in exchange for said skill
    
    
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
    Wanted.belongsTo(models.Offered, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Wanted;
};
