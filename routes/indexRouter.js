const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => { // home.ejs
  res.render("home", { data: [] , searchQuery: "" }); 
})

router.get("/search-movie", async (req, res) => {
  let query = req.query.search;
  
  try {
    let payload = await axios(`https://api.themoviedb.org/3/search/multi?api_key=a4cae43902da506229d8148bcfc7364c&language=en-US&query=${query}`);

    if (payload.data.results.length === 0) {
      res.render("home", { data: [], searchQuery: "No movies were found!" });
    } else {
      res.render("home", { data: payload.data.results, searchQuery: query });
    }
  } catch (error) {
    console.log(e);
  }
})

module.exports = router;