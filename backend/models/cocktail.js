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
  category: { type: String, required: true },

  /**
   * Instructions for cocktails.
   * @type {Stringr}
   */
  instructions: { type: String, required: true },

  /**
   * Ingredients array
   */
  ingredients: [{
    name: {
      type: String,
    },
    measurement: {
      type: String,
    }
  }],
  
  /**
   * Glass type
   */
  glass: { name: String, size: String }
})

cocktailSchema.path('ingredients')
.validate(
  ingredients => ingredients && ingredients.length > 0,
  'Ingredients needs to have at least one item'
);

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = { Cocktail, cocktailSchema }
