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
      },
      customer: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
    },{
      freezeTableName: true,
  // define the table's name
     tableName: 'burgers'
    }
    
    );
  
    return Burger;
  };
  