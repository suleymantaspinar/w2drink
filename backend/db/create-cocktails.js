const  CocktailService  = require("../services/CocktailService");
const path = require("path");
const fs = require("fs");

const csv = require("csv-parser");
const stripBom = require('strip-bom-stream');

const cocktail_csv = path.join(__dirname, "data", "cocktails.csv")
const results = [];

fs.createReadStream(cocktail_csv)
	.pipe(stripBom())
  .pipe(csv())
  .on("data", async function (data) {
		try {
			await CocktailService.createCocktail(formatCocktailData(data));
		} catch (error) {
			console.log(error, data)			
		}
  })
  .on("end", () => {
    console.log(results);
  });


/**
 * Non-parsed csv row
 * @param { Object } 
 *  
	{
		"name": "Free Silver",
		"category": "Cocktail Classics",
		"measurement-1": "1/4 oz",
		"ingredient-1": " Juice of a Lemon",
		"measurement-2": "1/2 oz",
		"ingredient-2": " Powdered Sugar",
		"measurement-3": "1 1/2 oz",
		"ingredient-3": " Gin",
		"measurement-4": "1/2 oz",
		"ingredient-4": " Dark rum",
		"measurement-5": "1 oz",
		"ingredient-5": " Milk",
		"measurement-6": "",
		"ingredient-6": " Club Soda",
		"instructions": "Shake with ice and strain into collins glass over ice cubes. Fill with club soda.",
		"glass": "Collins Glass",
		"glass-size": "14 to 16 ounces",
	};
 *
 * Suffix for the measurement and ingredient
 * @param { Number }
 * 
 * Parsed Cocktail Object
 	{
		name: 'data.name',
		category: data.category,
		instruction: data.Cocktail_image,
		ingredients: data.ingredient,
		glass: data.glass
	}   
	@returns { Object } 

*/
function formatCocktailData(data, n = 6) {
	let cocktail = {}
	
	cocktail[ "name" ] = data[ "name" ] || ""
	cocktail[ "category" ] = data[ "category" ] || ""
	cocktail[ "instructions" ] = data[ "instructions" ] || ""
	cocktail[ "glass" ] = []
	cocktail[ "ingredients" ] = []

	Array.from(Array(n).keys())
		.map(n => {
			if(data[`measurement-${n}`] && data[`ingredient-${n}`]) {
				let ingredient = {
					name: "",
					measurement: ""
				}

				ingredient[ "measurement" ] = data[ `measurement-${n}`]
				ingredient[ "name" ] = data[ `ingredient-${n}`]
				cocktail.ingredients.push(ingredient)
			}
		})
	
	if(data[ "glass" ] && data[ "glass-size" ]) {
		let glass = {};

		glass[ "name" ] = data[ "glass" ];
		glass[ "size" ] = data[ "glass-size" ];

		cocktail.glass.push(glass)
	}
	return cocktail
}
