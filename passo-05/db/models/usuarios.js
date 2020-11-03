const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idusuario"
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
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
    tableName: "usuarios",
    comment: "",
    indexes: []
  };
  const UsuariosModel = sequelize.define("usuarios_model", attributes, options);
  return UsuariosModel;
};