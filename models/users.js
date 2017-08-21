module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    google_id: {
      type: DataTypes.STRING,
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

  User.associate = function(models) {
    // Associating User with their Work Orders
    // When a user is deleted, also delete any associated skills offered/wanted
    User.hasMany(models.Offered, {
      onDelete: "cascade"
    });
    User.hasMany(models.Wanted, {
      onDelete: "cascade"
    });
  };

  return User;
};
