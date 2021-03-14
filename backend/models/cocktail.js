const { mongoose } = require('../db/mongo')

const cocktailSchema = new mongoose.Schema({
  /**
   * Cocktail name.
   * @type {String}
   */
  name: { type: String, required: true },

  /**
   * Cocktail category.
   * @type {String}
   */
  category: { type: String },

  /**
   * Instructions for cocktails.
   * @type {Stringr}
   */
  instruction: { type: String },
  /**
   * Ingredients array
   */
  ingredients: [{
    amount: String,
    measurement: String
  }],
  /**
   * Glass type
   */
  glass: { name: String, size: String }
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = { Cocktail, cocktailSchema }
