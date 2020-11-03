'use strict';

module.exports = app => {
  const { TEXT, INTEGER } = app.Sequelize;

  const Ship = app.model.define('ship', {
    name: TEXT,
    crewCapacity: INTEGER,
    amountOfSails: INTEGER,
  }, {
    timestamps: false,
    tableName: 'ship',
  });
  Ship.associate = function() {
    Ship.belongsTo(app.model.Captain, {
      constraints: false,
      as: 'ca',
    });
  };
  return Ship;
};
