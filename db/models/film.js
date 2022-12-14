'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  film.init({
    created: DataTypes.STRING,
    director: DataTypes.STRING,
    episode_id: DataTypes.STRING,
    opening_crawl: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};