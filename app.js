'use strict';

var location = {Minimum number of customers:"", Maximum number of customers:"", Average number of cookies purchased by customer:""};


//Assuming that window.crypto.getRandomValues is available 
//Trying to gnerate a random number of customers per hour

var array = new Uint32Array(14);
numCustomerPerHour.getRandomValues(array);

console.log("Number of customer per hour:");
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//function to generate random number of customer per hour:

function random(n, b) {
  return (Math.random() * (b-n) + n)|0;
};