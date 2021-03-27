const CocktailService = require("../services/CocktailService");

module.exports = class Cocktail {

   static async apiGetAllCocktails(req, res, next) {
       try {
         const cocktails = await CocktailService.getAllCocktails();
         if(!cocktails) {
            res.status(404).json("There are not any cocktails")
         }
         res.json(cocktails);
       } catch (error) {
          res.status(500).json({error: error})
       }
   }

   static async apiGetCocktailById(req, res, next) {
      try {
         let id = req.params.id || {};
         const cocktail = await CocktailService.getCocktailbyId(id);
         res.json(cocktail);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateCocktail(req, res, next) {
      try {
         const createdCocktail =  await CocktailService.createCocktail(req.body);
         res.json(createdCocktail);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiUpdateCocktail(req, res, next) {
      try {
         const cocktail = {}
         cocktail.name = req.body.name;
         cocktail.category = req.body.category;
         cocktail.instructions = req.body.instructions;
         cocktail.ingredients = req.body.ingredients;

         const updatedCocktail = await CocktailService.updateCocktail(cocktail);
         res.json(updatedCocktail);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiDeleteCocktail(req, res, next) {
        try {
            const cocktailId = req.params.id;
            const deleteResponse =  await CocktailService.deleteCocktail(cocktailId)
            res.json(deleteResponse);
        } catch (error) {
            res.status(500).json({error: error})
        }
   }

}
