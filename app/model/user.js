'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TIME, CHAR, BOOLEAN, UUIDV1, VIRTUAL, TINYINT, DECIMAL } = app.Sequelize;

  return app.model.define('mer', {
    merId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    merName: {
      type: STRING,
      defaultValue: UUIDV1,
    },
    date: DATE,
    time: TIME,
    datetime: DATE,
    timestamp: DATE,
    intTime: INTEGER,
    str: {
      type: STRING, allowNull: false, validate: {
        isEmail: true,
      },
    },
    num: INTEGER(11).ZEROFILL.UNSIGNED,
    char: CHAR,
    bool: BOOLEAN,
    uniqueOne: { type: STRING, unique: 'compositeIndex' },
    uniqueTwo: { type: INTEGER, unique: 'compositeIndex' },
    fullName: {
      type: VIRTUAL,
      get() {
        return `${this.str}${this.char}`;
      },
      // set(value) {
      //   throw new Error('不要尝试设置 `fullName` 的值!');
      // },
    },
    ti: {
      type: TINYINT,
      defaultValue: 127,
    },
    de: DECIMAL,
  });
};
