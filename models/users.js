module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    google_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    }
  });

  User.associate = function(models) {
    // Associating User with their Work Orders
    // When a user is deleted, also delete any associated skills offered/wanted
    User.hasMany(models.skills_offered, {
      onDelete: "cascade"
    });
    User.hasMany(models.skills_wanted, {
      onDelete: "cascade"
    });
  };

  return User;
};
