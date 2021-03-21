const  express =  require("express");
const router = express.Router();

const CocktailCtrl = require("../controllers/cocktails.controllers");

router.get("/", CocktailCtrl.apiGetAllCocktails);
router.post("/", CocktailCtrl.apiCreateCocktail);
router.get("/article/:id", CocktailCtrl.apiGetCocktailById);
router.put("/article/:id", CocktailCtrl.apiUpdateCocktail);
router.delete("/article/:id", CocktailCtrl.apiDeleteCocktail);

module.exports = router;
