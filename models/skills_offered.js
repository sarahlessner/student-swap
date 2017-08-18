module.exports = function(sequelize, DataTypes) {
  //create offered table - all non-automatic data comes from users/skills
  var Offered = sequelize.define("Offered", {
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    },
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    }
  });

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
    Offered.hasMany(models.Wanted, {
      //delete any skills wanted tied to this exchange
      onDelete: "cascade"
    })
  };

  return Offered;
};
