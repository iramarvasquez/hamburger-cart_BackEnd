'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pedido.init({
    tomate: DataTypes.STRING,
    cebola: DataTypes.STRING,
    alface: DataTypes.STRING,
    cheedar: DataTypes.STRING,
    milho: DataTypes.STRING,
    batata_palha: DataTypes.STRING,
    pepino_japones: DataTypes.STRING,
    carne: DataTypes.STRING,
    frango: DataTypes.STRING,
    calabresa: DataTypes.STRING,
    mostarda: DataTypes.STRING,
    ketchup: DataTypes.STRING,
    maionese: DataTypes.STRING,
    fritas: DataTypes.STRING,
    coca_cola_2l: DataTypes.STRING,
    coca_cola_350ml: DataTypes.STRING,
    fanta_guarana_2l: DataTypes.STRING,
    fanta_laranja_2l: DataTypes.STRING,
    fanta_uva_2l: DataTypes.STRING,
    sprite: DataTypes.STRING,
    coca_cola_600ml: DataTypes.STRING,
    mostarda: DataTypes.STRING,
    ketchup: DataTypes.STRING,
    maionese: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};