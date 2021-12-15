const axios = require('axios');

exports.getMainPage = (req, res) =>{
    let url = `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.APIKEY}`;

    axios.get(url)
    .then((response) =>{
        console.log(response.data.recipes[0].title);
        let recipeData = {
            title: response.data.recipes[0].title,
            summary: response.data.recipes[0].summary,
            ingredients: response.data.recipes[0].extendedIngredients,
     //       unit: response.data.recipes[0].extendedIngredients[0].measures.metric,
            instructions: response.data.recipes[0].instructions,
            imageUrl: response.data.recipes[0].image
        }

        res.render('index', {dataFromSpoonacular: recipeData});
    })
    .catch(error=>{
        console.log(error);
    })
};