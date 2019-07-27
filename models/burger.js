module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
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
    },{
      freezeTableName: true,
  // define the table's name
     tableName: 'tests'
    }
    
    );
  

    return Burger;
  };
  