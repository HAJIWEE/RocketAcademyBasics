var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var toCatchUp = function (timeDelayed) {
  var distance = 200 * 2; //train 1 speed and time taken to reach tokyo
  var timeLeft = timeDelayed;
  if (timeDelayed >= 2) {
    timeLeft = 2 - timeDelayed / 60;
  } else {
    timeLeft = 2 - timeDelayed;
  }

  var newSpeed = distance / timeLeft;
  return newSpeed;
};

var main = function (input) {
  //changed the value of myOutputValue to Hello <space> <input from user>
  var myOutputValue = "hello " + input;
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "hello " + input + " you look smart today!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue =
    "hi, " + input + " kilometers is " + distanceInMiles + " miles.";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var userInput = input;
  var myOutputValue =
    "hi, " +
    input +
    " kilometers is " +
    convertKmToMiles(userInput) +
    " miles.";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  //Get input from train 2 conductor:
  var userInput = input;
  //pass input into function to calculate new speed for train 2:
  var train2Speed = toCatchUp(userInput);
  var myOutputValue =
    "Hi, to catch up to train 1, you need to go at: " + train2Speed + " kph.";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  //Define the clock and angles in degrees: minute hand moves and hour hand moves every minute.
  var hourHand = 1.0;
  var minuteHand = input;
  for (minuteHand; minuteHand >= 60.0; minuteHand -= 60.0) {
    hourHand += 1.0;
  }
  hourHand = hourHand + minuteHand / 60.0;
  var hourHandDeg = (360.0 / 12.0) * hourHand;
  var minuteHandDeg = (360.0 / (12.0 * 60.0)) * minuteHand;
  var degDiff = Math.abs(minuteHandDeg - hourHandDeg);
  var degDiffAlt = 360.0 - degDiff;
  var myOutputValue =
    "Angle between hour hand and minute hand at given time is: " +
    degDiff +
    " degrees or " +
    degDiffAlt +
    " degrees.";
  return myOutputValue;
};
