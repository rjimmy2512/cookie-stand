'use strict';

// we want to render the same table in the HTML but in JS

var tableEl = document.getElementById('table');
var allLocations = [];
// constructor for locations:
function Location('name', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'){
  this.name = 'name';
  this.cookiesAt6am = '6:00am';
  this.cookiesAt7am = '7:00am';
  this.cookiesAt8am = '8:00am';
  this.cookiesAt9am = '9:00am';
  this.cookiesAt10am = '10:am';
  this.cookiesAt11am = '11:00am';
  this.cookiesAt12pm = '12:00pm';
  this.cookiesAt1pm = '1:00pm';
  this.cookiesAt2pm = '2:00pm';
  this.cookiesAt3pm = '3:00pm';
  this.cookiesAt4pm = '4:00pm';
  this.cookiesAt5pm = '5:00pm';
  this.cookiesAt6pm = '6:00pm';
  this.cookiesAt7pm = '7:00pm';
  this.cookiesAt8pm = '8:00pm';
  this.totalDailyLocation = 'Daily Location Total';

  allLocations.push(this);
}

Location.prototype.render = function(){
  // make a tr
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.name;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt6am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt7am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt8am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt9am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt10am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt11am;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt12pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt1pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt2pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt3pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt4pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt5pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt6pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt7pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.cookiesAt8pm;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.totalDailyLocation;
  // stick it to the DOM
  trEl.appendChild(tdEl);
}

new Location('1st and Pike', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');
new Location('SeaTac Airport', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');
new Location('Seattle Center', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');
new Location('Capitol Hill', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');
new Location('Alki', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');
new Location('Totals', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total');


// 1. create the element
// 2. give it content
// 3. append to the parent in the DOM

function renderHeader(){
  // make a tr and stick it to the DOM
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // put 'blank' in the DOM
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);

  // put the 6:00am in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '6:00am';
  trEl.appendChild(tdEl);

  // put the 7:00am in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '7:00am';
  trEl.appendChild(tdEl);

  // put 8:00am in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '8:00am';
  trEl.appendChild(tdEl);

  // put 9:00am in the DOM
  var tdEl = document.createElement('td');
  tdEl.textContent = '9:00am';
  trEl.appendChild(tdEl);

  // put the 10:00am in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '10:00am';
  trEl.appendChild(tdEl);

  // put the 11:00am in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '11:00am';
  trEl.appendChild(tdEl);

  // put 12:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '12:00pm';
  trEl.appendChild(tdEl);

  // put the 1:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '1:00pm';
  trEl.appendChild(tdEl);

  // put the 2:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '2:00pm';
  trEl.appendChild(tdEl);

  // put 3:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '3:00pm';
  trEl.appendChild(tdEl);

  // put 4:00pm in the DOM
  var tdEl = document.createElement('td');
  tdEl.textContent = '4:00pm';
  trEl.appendChild(tdEl);

  // put the 5:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '5:00pm';
  trEl.appendChild(tdEl);

  // put the 6:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '6:00pm';
  trEl.appendChild(tdEl);

  // put 7:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '7:00pm';
  trEl.appendChild(tdEl);

  // put the 8:00pm in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = '8:00pm';
  trEl.appendChild(tdEl);

  // put the daily location total in the DOM
  tdEl = document.createElement('td');
  tdEl.textContent = 'Daily Location Total';
  trEl.appendChild(tdEl);
}

renderHeader();
for (var i = 0; i < allLocations.length; i++) {
  allLocations[i].render();
}
