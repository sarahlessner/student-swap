module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define("Skill", {
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Skill.associate = function(models) {
    // Associating User with their Work Orders
    // When a user is deleted, also delete any associated skills offered/wanted
    Skill.hasMany(models.skills_offered, {
      onDelete: "cascade"
    });
    Skill.hasMany(models.skills_wanted, {
      onDelete: "cascade"
    });
  };

  return Skill;
};
