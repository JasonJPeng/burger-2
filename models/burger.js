module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Test", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
  
    return Burger;
  };
  