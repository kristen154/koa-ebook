/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('koa_ebooks', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ebookname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    logopic: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    addtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'koa_ebooks'
  });
};
