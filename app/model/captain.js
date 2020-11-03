'use strict';

module.exports = app => {
  const { TEXT, INTEGER } = app.Sequelize;

  const Captain = app.model.define('captain', {
    name: TEXT,
    skillLevel: {
      type: INTEGER,
      validate: { min: 1, max: 10 },
    },
  }, {
    timestamps: false,
  });
  Captain.associate = function() {
    Captain.hasMany(app.model.Ship, {
      constraints: false,
      as: 'sp',
    });
  };
  return Captain;
};
