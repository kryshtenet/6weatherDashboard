//Event Listener for our search city button
$("#city-button").on("click",function(){
  
}


// // Adding click event listen listener to all buttons
// $("button").on("click", function() {
//     // Grabbing and storing the city to be searched property value from the button
//     var city = $(this).attr("city-searched");

// // Constructing a queryURL using the city name
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// animal + "&api_key=dc6zaTOxFJmzC&limit=10";

// var queryURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=82f7826c88e27ea6666cd198fcd8453b";

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     $("#movie-view").text(JSON.stringify(response));
//   });