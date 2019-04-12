/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('koa_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    addtime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'koa_user'
  });
};
