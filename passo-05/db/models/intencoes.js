const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idintencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idintencao"
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nome"
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    }
  };
  const options = {
    tableName: "intencoes",
    comment: "",
    indexes: []
  };
  const IntencoesModel = sequelize.define("intencoes_model", attributes, options);
  return IntencoesModel;
};