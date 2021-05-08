$(document).ready(function () {
    //Create HTML elements for the day planner using JQuery 
    //Used moment to get the current date and display it to the page
    //Used moment to get the current time 
    var currentDateArea = $('#currentDay');
    var currentDate = moment();
    currentDateArea.text(currentDate.format('dddd, MMMM Do'));
    var currentTime = currentDate.format('H') * 1;

//Using a for loop to create the schedule from 9am - 5pm
for (var i = 9; i < 18; i++) {

    //This bring in the time and use the moduelo operator to set the time from 9am - 5pm
    var timeSchedule = i % 12;

    //Grabbing the container element so I can use it to append the created elements to.
    var scheduleContainer = $('.container');

    //Created div that has a class of row and appended it to the container.
    var rowDiv = $('<div/>').addClass('row');
    scheduleContainer.append(rowDiv);

    //Created another dic that has a class of col-md-2 and appended it to the row div
    var hourDiv = $('<div/>').addClass('col-md-2 hour');
    rowDiv.append(hourDiv);

    //create a p tag for the hours to be written in.
    var time = $('<p>').addClass('time-display');
    //Used conditional logic to check if the time and put AM and PM accordingly
    if (i <= 12) {
        time.text(timeSchedule + ' AM');
    } else {
        time.text(timeSchedule + 'PM');
    }
    //This check if the timeSchedule is 0 then it sets it to noon
    if (timeSchedule === 0) { time.text('12 PM') }
    hourDiv.append(time);

    //This uses the moment time variable that I created above to check whether the time is past, present or future and adds the according class to the div.
    var screenTime = ' present';
    if(i < currentTime){
    screenTime = ' past'
    }else if(i > currentTime){
    screenTime = ' future'
    }

    //Created another div taht has a class of col-md-8 and appends to the row div also
    var inputDiv = $('<div/>').addClass('col-md-8' + screenTime);
    rowDiv.append(inputDiv);

    //create a input element for the input of the user the information that they want to be submitted.
    var inputField = $('<input/>');
    inputField.attr({ type: 'text', id: 'text-input-' + i, name: 'text', 'data-list': i});
    inputDiv.append(inputField);

    //Create another div with class of col-md-2
    var submitDiv = $('<div/>').addClass('col-md-2 saveBtn');
    rowDiv.append(submitDiv);

    //create a i tag from favCon that is like an icon that is clickable to save in local storage.
    var submitBtn = $('<i class="far fa-save"></i>');
    submitBtn.attr({ id: 'submit-button', 'data-list': i });
    submitBtn.click(function(){
        var currValue = $(this).parent().siblings('div.col-md-8').children().val();
        var dataTime = $(this).attr('data-list');
        localStorage.setItem(dataTime, currValue);
    });
    submitDiv.append(submitBtn);
}
    //Grabs the value from localstorage and sets it in the input even if the user refreshes.
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

