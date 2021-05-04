$(document).ready(function() {
//Create HTML elements for the day planner using JQuery 

//Grab element for date and use moment to get it correct date and use Jquery to display.

var currentDateArea = $('#currentDay');
var currentDate = moment();
currentDateArea.text(currentDate.format('dddd, MMMM Do'));
});

//Using a for loop to create the schedule from 9am - 5pm. 

for(var i = 9; i < 17; i++){

//grab elements needed

var scheduleContainer = $('.container');

//Create div that has a class of row -> this is outer div

var rowDiv = $('<div/>').addClass('row');
scheduleContainer.append(rowDiv);

//In that div then create another div with a class of col-md-2

var hourDiv = $('<div/>').addClass('col-md-2 hour');
rowDiv.append(hourDiv);

//create a p tag for the hours in the div

var time = $('<p>').addClass('time-display');
hourDiv.append(time);

//Create another div with class of col-md-8

var inputDiv = $('<div/>').addClass('col-md-8 past');
rowDiv.append(inputDiv);

//create a input element for the input of the user in the div

var inputField = $('<input/>');
inputField.attr({type: 'text', id: 'text-input', name: 'text'});
inputDiv.append(inputField);


//Create another div with class of col-md-2
var submitDiv = $('<div/>').addClass('col-md-2 saveBtn');
rowDiv.append(submitDiv);

//create a i tag that is like an icon that is clickable to save in local storage.
var submitBtn = $('<i class="far fa-save"></i>');
submitBtn.attr({id: 'submit-button'});
submitDiv.append(submitBtn);


}