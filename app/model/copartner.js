'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  return app.model.define('copartner', {
    id: {
      type: INTEGER(11).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    account: {
      type: STRING(20),
      allowNull: false,
      unique: true,
      comment: '账号',
      validate: {
        isAlphanumeric: true,
        len: [ 2, 10 ],
      },
    },
    password: {
      type: STRING(50),
      allowNull: false,
      comment: '密码',
    },
    name: {
      type: STRING(10),
      allowNull: false,
      comment: '姓名',
    },
    phone: {
      type: STRING(11),
      allowNull: false,
      unique: true,
      comment: '手机号',
      validate: {
        is: /^[1][3-9][0-9]{9}$/,
      },
    },
  });
};
