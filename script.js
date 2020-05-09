// declaring the time in the global scope to pull from later
var currentDateAndTime = Date(Date.now());
$("#currentDay").append(currentDateAndTime);
var currentHour = new Date().getHours();

// onclick for the save buttons (several buttons, with the same class)
$(".btn").on("click", function(){
var time = $(this).val() // declaring a variable for this.val

var currentStorage = $("#textArea" + time).val().trim()

localStorage.setItem("miltime" + time, currentStorage)
});



function matchHours(){
for (var i = 9; i < 18; i++){
    // moved Local Sorage into the for loop since it will need to retrieve each of the values, and the loop will create that umbrella
    var userInput = localStorage.getItem("miltime"+i)
    if(userInput != null){
        $("#textArea"+i).val(userInput);
    }
    // inserting currentHour in an if statement, and our time is less than the currenthour, then we will assign past (gray block)
    if (i < currentHour) {
    $("#textArea"+ i).addClass("past")
      // else if statement, and if our current time parsed into an integer is eaqual to the currenthour, then we will assign it the present(Red), and remove past. 
} else if (parseInt(currentHour) === i){
    $("#textArea"+ i).addClass("present")
    $("#textArea"+ i).removeClass("past")
    // anyhting else will be assgned future (green), and will remove the other two classes. 
} else {
    $("#textArea"+ i).addClass("future")
    $("#textArea"+ i).removeClass("present past")
}
}
}
matchHours();
// - Wait for DOM to be "ready", then...

   
//   - Create a function to update the hours

// //     - Get the current hour in military time (i.e. 14 for 2pm)

// //       - Figure out which hour this block represents
// //       - If this block's hour is less than the current hour:
// //         - Add the class "past" to this block
// //       - Else if this block's hour is the current hour:
// //         - Remove "past" class from this time block
// //         - Add "present" class to this time block
// //       - Else
// //         - Remote the "past" class from this time block
// //         - Remove the "present" class from this time block
// //         - Add the "future" class to this time block

    

//   - Call the function we just created to update the hours the first time
//   - Re-run the function on an interval (every 60s?) to update as time changes
//   - Load data for 9AM block from localStorage
//   - Load data for 10AM block from localStorage
//   - Load data for 11AM block from localStorage
//   - Load data for 12PM block from localStorage
//   - Load data for 1PM block from localStorage
//   - Load data for 2PM block from localStorage
//   - Load data for 3PM block from localStorage
//   - Load data for 4PM block from localStorage
//   - Load data for 5PM block from localStorage
//   - Update the current date/time at the top of the page
//   - Set up a click handler for the save button:
//     - Get the value from the textarea in the block that is being saved
//     - Get the time (i.e. 9) of the time block that's being saved
//     - Store the value from the textarea in localStorage, using the hour as the key
