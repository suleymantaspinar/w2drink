const  express =  require("express");
const router = express.Router();

const CocktailCtrl = require("../controllers/cocktails.controllers");

router.get("/", CocktailCtrl.apiGetAllCocktails);
router.post("/", CocktailCtrl.apiCreateCocktail);
router.get("/cocktail/:id", CocktailCtrl.apiGetCocktailById);
router.put("/cocktail/:id", CocktailCtrl.apiUpdateCocktail);
router.delete("/cocktail/:id", CocktailCtrl.apiDeleteCocktail);

module.exports = router;
