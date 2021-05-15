// YOUR CODE HERE!

// Getting Data from data.js

var RawData = data;

var tbody = d3.select("tbody");

// Function to get Data

RawData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

// Update cell's values with UFO data.
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Filter Function

var submit = d3.select("#filter-btn");
var empty = d3.select("tbody")
submit.on("click", function() {
    empty.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(RawData);

    var filteredData = RawData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");
    

        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});


