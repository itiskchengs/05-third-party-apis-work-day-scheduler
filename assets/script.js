$(document).ready(function () {
    //Create HTML elements for the day planner using JQuery 

    //Grab element for date and use moment to get it correct date and use Jquery to display.

    var currentDateArea = $('#currentDay');
    var currentDate = moment();
    currentDateArea.text(currentDate.format('dddd, MMMM Do'));
    var currentTime = currentDate.format('H') * 1;

    

var inputCounter = 0;

//Using a for loop to create the schedule from 9am - 5pm. 

for (var i = 9; i < 18; i++) {

    //Setting the time
    var timeSchedule = i % 12;

    //Need to add whether it is am or pm

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
    if (i <= 12) {
        time.text(timeSchedule + ' AM');
    } else {
        time.text(timeSchedule + 'PM');
    }
    if (timeSchedule === 0) { time.text('12 PM') }
    hourDiv.append(time);

    //Create another div with class of col-md-8
    var screenTime = ' present';
    if(i < currentTime){
    screenTime = ' past'
    }else if(i > currentTime){
    screenTime = ' future'
    }
    console.log(currentTime);
    console.log(i);
    var inputDiv = $('<div/>').addClass('col-md-8' + screenTime);
    rowDiv.append(inputDiv);

    //create a input element for the input of the user in the div

    var inputField = $('<input/>');
    
    inputField.attr({ type: 'text', id: 'text-input-' + i, name: 'text', 'data-list': i});
    inputDiv.append(inputField);

    var tester = $('input[data-list]');
    var testerCount= tester[inputCounter];

    inputCounter++;

    function tru(e){

    e.preventDefault();
    console.log(e.target);
    }


    //Use execrise 23
    //Use data attribute to get the time and buttons together to link together.

    /*
    console.log(textInputs[inputCounter]);
    var allInputs = textInputs[inputCounter];
    */
    //inputCounter++;

    //Create another div with class of col-md-2
    var submitDiv = $('<div/>').addClass('col-md-2 saveBtn');
    rowDiv.append(submitDiv);

    //create a i tag that is like an icon that is clickable to save in local storage.
    var submitBtn = $('<i class="far fa-save"></i>');
    submitBtn.attr({ id: 'submit-button', 'data-list': i });
    submitBtn.click(function(){
        var currValue = $(this).parent().siblings('div.col-md-8').children().val();
        var dataTime = $(this).attr('data-list');
        console.log(dataTime);
        localStorage.setItem(dataTime, currValue);

    });
    submitDiv.append(submitBtn);
    var sub = $('i[data-list]');
   
}
    $('#text-input-9').val(localStorage.getItem('9'));
    $('#text-input-10').val(localStorage.getItem('10'));
    $('#text-input-11').val(localStorage.getItem('11'));
    $('#text-input-12').val(localStorage.getItem('12'));
    $('#text-input-13').val(localStorage.getItem('13'));
    $('#text-input-14').val(localStorage.getItem('14'));
    $('#text-input-15').val(localStorage.getItem('15'));
    $('#text-input-16').val(localStorage.getItem('16'));
    $('#text-input-17').val(localStorage.getItem('17'));


});

//Save the value to local storage. With refresh it will stay there. Gotta put this in a function so it can be run when the button is clicked. 




//Depending on the time the work schedule will have past, present and future. 

/*
    getInputVal();

    function inputVal(){

        localStorage.setItem('input-answer', JSON.stringify(textInputs.val()));
    }

    function getInputVal(){
        var getVal = localStorage.getItem('input-answer');

        if(getVal != null){
            textInputs.val(getVal);
        }else{
            console.log('no answers');
        }
    }
*/