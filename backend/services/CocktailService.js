const { Cocktail } = require('../models/cocktail');
module.exports = class CocktailService {

    static async getAllCocktails() {
        try {
            const allCocktails = await  Cocktail.find();
            return allCocktails;
        } catch (error) {
            console.log(`Could not fetch Cocktails ${error}`)
        }
    }

    static async createCocktail(data) {
        try {
            const newCocktail = {
                name: data.name,
                category: data.category,
                instructions: data.instructions,
                ingredients: data.ingredients,
                glass: data.glass
            }
           const response = await new Cocktail(newCocktail).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }

    static async getCocktailbyId(CocktailId) {
        try {
            const singleCocktailResponse =  await Cocktail.findById({_id: CocktailId});
            return singleCocktailResponse;
        } catch (error) {
            console.log(`Cocktail not found. ${error}`)
        }
    }

    static async updateCocktail(data) {
            try {
                const updateResponse =  await Cocktail.updateOne({
                    name: data.name,
                    category: data.category,
                    instructions: data.instruction,
                    ingredients: data.ingredients,
                    glass: data.glass
                })
                return updateResponse;
            } catch (error) {
                console.log(`Could not update Cocktail ${error}`);
        }
    }

    static async deleteCocktail(CocktailId) {
        try {
            const deletedResponse = await Cocktail.findOneAndDelete(CocktailId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  not delete Cocktail ${error}`);
        }

    }
}