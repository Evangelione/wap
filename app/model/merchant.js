'use strict';

module.exports = app => {
  const { INTEGER, STRING, DECIMAL, TINYINT, TEXT, TIME, NOW, JSON } = app.Sequelize;
  const ctx = app.createAnonymousContext();

  return app.model.define('merchant', {
    id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return this.getDataValue('id').toString();
      },
    },
    name: {
      type: STRING(50),
      allowNull: false,
    },
    category_id: {
      type: STRING(20),
      allowNull: false,
    },
    desc: {
      type: STRING(200),
    },
    images: {
      type: JSON,
    },
    logo: {
      type: STRING(200),
      allowNull: false,
    },
    contact: {
      type: STRING(20),
      allowNull: false,
    },
    tel: {
      type: STRING(20),
      allowNull: false,
    },
    email: {
      type: STRING(50),
    },
    account: {
      type: STRING(50),
      allowNull: false,
    },
    password: {
      type: STRING(200),
      allowNull: false,
      set(value) {
        const bcrypt = ctx.helper.bcryptSync(value);
        this.setDataValue('password', bcrypt);
      },
    },
    province_id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('province_id').toString();
      },
    },
    city_id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('city_id').toString();
      },
    },
    area_id: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      get() {
        return this.getDataValue('area_id').toString();
      },
    },
    address: {
      type: STRING(200),
      allowNull: false,
    },
    long: {
      type: DECIMAL(10, 7),
    },
    lat: {
      type: DECIMAL(10, 7),
    },
    created_at: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: NOW(),
    },
    updated_at: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: NOW(),
    },
    deleted_at: {
      type: INTEGER(10).UNSIGNED,
    },
  }, {
    tableName: 't_yk_merchant',
    timestamps: false,
  });
};
