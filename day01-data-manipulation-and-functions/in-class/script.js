var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celcius = ((input - 32) * 5) / 9;
  var myOutputValue = celcius + "^C";
  return myOutputValue;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // input is average number of customers
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var totalPintsPerDay = 2 * input; //total pints per day.(In pints)
  var totalDaysPerQuarter = 365 / 4; //num of days in a quarter year
  var totalPintsPerQuarter = totalPintsPerDay * totalDaysPerQuarter;
  var totalKegsPerDay = totalPintsPerDay / (124 * 2); //kegs per day
  var halfBarrelSizePerQuarter = totalPintsPerQuarter / 124; //total number of half barrel sized keg
  var myOutputValue = `Kegs of Beer required per day: ${totalKegsPerDay.toFixed(
    2
  )} and ${halfBarrelSizePerQuarter.toFixed(
    2
  )} half barrel size kegs per quarter needed`;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  //input here is how much GB user use per month
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var totalNumOfPlan = Math.ceil(input / 50);
  var pricePerGb = (19.99 * totalNumOfPlan) / input;
  var myOutputValue = `Price per Gb paid: $${pricePerGb.toFixed(2)}`;
  return myOutputValue;
};
