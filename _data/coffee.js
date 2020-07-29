const Cache = require('@11ty/eleventy-cache-assets');
module.exports = async function() {
    let json = await Cache('https://yavin4.herokuapp.com/api/coffees/', {
      duration: "1d",
      type: "json"
    });

    var sortedCoffees = json.sort((b, a) => new Date(a.roastDate) - new Date(b.roastDate));
    
    var latestCoffee = json.slice(0, 1);
    console.log(latestCoffee);
    return latestCoffee;
    
  }