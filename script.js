    //Event listener for the city-search button
    $("#citySearchBtn").on("click", function() {
        //Grabbing and storing the data-cities property value from the button
        var pastSearches = $(this).attr("data-cities")

    // Storing the Open Weather Map API URL for the weather
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
     pastSearches + "82f7826c88e27ea6666cd198fcd8453b";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {

//       // Saving the cities searched property
//         var weatherData = response.

//         // Creating and storing an image tag
//         var catImage = $("<img>");

//         // Setting the catImage src attribute to imageUrl
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");

//         // Prepending the catImage to the images div
//         $("#images").prepend(catImage);
//       });
//   });