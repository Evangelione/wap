'use strict';

module.exports = app => {
  const { INTEGER, STRING, BIGINT, TINYINT } = app.Sequelize;

  return app.model.define('district', {
    id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return this.getDataValue('id').toString();
      },
    },
    pid: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('pid').toString();
      },
    },
    deep: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('deep').toString();
      },
    },
    name: {
      type: STRING(15),
      allowNull: false,
    },
    pinyin_prefix: {
      type: STRING(2),
      allowNull: false,
    },
    pinyin: {
      type: STRING(50),
      allowNull: false,
    },
    ext_id: {
      type: BIGINT(20).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('ext_id').toString();
      },
    },
    ext_name: {
      type: STRING(20),
    },
  }, {
    tableName: 'sys_district',
    timestamps: false,
  });
};
