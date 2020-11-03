const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idmensagem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idmensagem"
    },
    texto: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "texto"
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "data"
    },
    idstatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idstatus",
      references: {
        key: "idstatus",
        model: "status_model"
      }
    },
    idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idusuario",
      references: {
        key: "idusuario",
        model: "usuarios_model"
      }
    },
    idintencao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idintencao",
      references: {
        key: "idintencao",
        model: "intencoes_model"
      }
    }
  };
  const options = {
    tableName: "mensagens",
    comment: "",
    indexes: [{
      name: "fk_mensagens_status_idx",
      unique: false,
      type: "BTREE",
      fields: ["idstatus"]
    }, {
      name: "fk_mensagens_usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idusuario"]
    }, {
      name: "fk_mensagens_intencoes1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idintencao"]
    }]
  };
  const MensagensModel = sequelize.define("mensagens_model", attributes, options);
  return MensagensModel;
};