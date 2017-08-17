module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define("Skill", {
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    },
    updatedAt: { 
      type: DataTypes.DATE, 
      defaultValue: sequelize.fn('now') 
    }
  });

  Skill.associate = function(models) {
    // Associating User with their Work Orders
    // When a user is deleted, also delete any associated skills offered/wanted
    Skill.hasMany(models.Offered, {
      onDelete: "cascade"
    });
    Skill.hasMany(models.Wanted, {
      onDelete: "cascade"
    });
  };

  return Skill;
};
