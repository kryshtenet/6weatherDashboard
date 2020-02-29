 
//  function searchWeatherInCities(cities){
//    //Storing the Open Weather Map API URL for the weather
//    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
//    pastSearches + "82f7826c88e27ea6666cd198fcd8453b";

//    //Perfoming an AJAX GET request to our queryURL
//    $.ajax({
//    url: queryURL,
//    method: "GET"
//    }).then(function(response){

//     //Printing the entire object to console
//     console.log(response);

//     // Constructing HTML containing the artist information
//     var citiesName = $("<h1>").text(response.name);
//     var citiesTemperature = $("<p>").attr("href", response.url).append(artistName);
//     var citiesHumidity = $("<img>").attr("src", response.thumb_url);
//     var citiesWindSpeed = $("<h2>").text(response.tracker_count + " fans tracking this artist");
//     var citiesUvIndex = $("<h2>").text(response.upcoming_event_count + " upcoming events");
//     var citiesToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

//    })


//  }
 
 
 
 
 
 //   //Event listener for the city-search button
  //   $("#citySearchBtn").on("click", function() {
  //     //Grabbing and storing the data-cities property value from the button
  //     var pastSearches = $(this).attr("data-cities")

  // // Storing the Open Weather Map API URL for the weather
  // var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
  //  pastSearches + "82f7826c88e27ea6666cd198fcd8453b";

  // // Perfoming an AJAX GET request to our queryURL
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })

  // // After the data from the AJAX request comes back
  // .then(function(response) {
  //   console.log(queryURL);
  //   console.log(response);

  // // Saving the cities searched property
  // var searched = response.data




//         // Creating and storing an image tag
//         var catImage = $("<img>");

//         // Setting the catImage src attribute to imageUrl
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");

//         // Prepending the catImage to the images div
//         $("#images").prepend(catImage);
//       });
//   });