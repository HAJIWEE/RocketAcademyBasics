var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "";
  var counter = 0;

  // Continue the loop while counter is less than the input value
  while (counter < input) {
    // If counter is less than 5, add "yes" to output
    if (counter < 5) {
      myOutputValue = myOutputValue + "yes";
      // Otherwise, add "no" to output
    } else {
      myOutputValue = myOutputValue + "no";
    }
    counter = counter + 1;
  }
  return myOutputValue;
};
var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var counter = 0;
  var myOutputValue = "";
  while (counter < 6) {
    myOutputValue = myOutputValue + "hello ";
    counter++;
  }
  return myOutputValue;
  //if counter starts as a number other than zero it will loop 5 - counter times
  //if we add more than 1 to counter in the while loop, the loop will loop 5/number added times
  //it will loop 7 times not 6.
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  var inCounter = 0;
  var outCounter = 0;

  while (outCounter < 3) {
    while (inCounter < 3) {
      myOutputValue = myOutputValue + "hello";
      inCounter++;
    }
    myOutputValue = myOutputValue + "</br>";
    outCounter++;
    inCounter = 0;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  var counter = true;
  while (counter == true) {
    console.log(myOutputValue);
  }
  return myOutputValue;
};
