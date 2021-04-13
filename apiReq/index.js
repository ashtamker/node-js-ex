const request = require('request');
const axios = require("axios");


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      console.error("error:", error);
    } 
    else {
      console.log(body.strDrink);
}
  });


  axios.get(url)
  .then(function (response) {
    console.log(response.strDrink);
  })
  .catch(function (error) {
    console.log(error);
  });