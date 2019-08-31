'use strict';

// we want to render the same table in the HTML but in JS

var tableEl = document.getElementById('table');
var allLocations = [];
// constructor for locations:
function Location(name, cookieshour1, cookieshour2,cookieshour3,cookieshour4, cookieshour5,cookieshour6, cookieshour7, cookieshour8, cookieshour9, cookieshour10, cookieshour11, cookieshour12, cookieshour13, cookieshour14, cookieshour15, cookieshourstotal){
  this.name = name;
  this.cookiesAt6am = cookieshour1;
  this.cookiesAt7am = cookieshour2;
  this.cookiesAt8am = cookieshour3;
  this.cookiesAt9am = cookieshour4;
  this.cookiesAt10am = cookieshour5;
  this.cookiesAt11am = cookieshour6;
  this.cookiesAt12pm = cookieshour7;
  this.cookiesAt1pm = cookieshour8;
  this.cookiesAt2pm = cookieshour9;
  this.cookiesAt3pm = cookieshour10;
  this.cookiesAt4pm = cookieshour11;
  this.cookiesAt5pm = cookieshour12;
  this.cookiesAt6pm = cookieshour13;
  this.cookiesAt7pm = cookieshour14;
  this.cookiesAt8pm = cookieshour15;
  this.totalDailyLocation = cookieshourstotal;

  allLocations.push(this);
};

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
};

new Location('1st and Pike', 65*6.3*0.5|0,65*6.3*0.75|0, 65*6.3*1|0,65*6.3*0.6|0, 65*6.3*0.8|0,65*6.3*1|0,65*6.3*0.7|0,65*6.3*0.4|0,65*6.3*0.6|0,65*6.3*0.9|0,65*6.3*0.7|0,65*6.3*0.5|0,65*6.3*0.3|0, 65*6.3*0.4|0,65*6.3*0.6|0, 'Daily Location Total');
new Location('SeaTac Airport',24*1.2*0.5|0,24*1.2*0.75|0, 24*1.2*1|0,24*1.2*0.6|0, 24*1.2*0.8|0,24*1.2*1|0,24*1.2*0.7|0,24*1.2*0.4|0,24*1.2*0.6|0,24*1.2*0.9|0,24*1.2*0.7|0,24*1.2*0.5|0,24*1.2*0.3|0, 24*1.2*0.4|0,24*1.2*0.6|0, 'Daily Location Total');
new Location('Seattle Center', 38*3.7*0.5|0,38*3.7*0.75|0, 38*3.7*1|0,38*3.7*0.6|0, 38*3.7*0.8|0,38*3.7*1|0,38*3.7*0.7|0,38*3.7*0.4|0,38*3.7*0.6|0,38*3.7*0.9|0,38*3.7*0.7|0,38*3.7*0.5|0,38*3.7*0.3|0, 38*3.7*0.4|0,38*3.7*0.6|0, 'Daily Location Total');
new Location('Capitol Hill', 38*2.3*0.5|0,38*2.3*0.75|0, 38*2.3*1|0,38*2.3*0.6|0, 38*2.3*0.8|0,38*2.3*1|0,38*2.3*0.7|0,38*2.3*0.4|0,38*2.3*0.6|0,38*2.3*0|0.9,38*2.3*0.7|0,38*2.3*0.5|0,38*2.3*0.3|0, 38*2.3*0.4|0,38*2.3*0.6|0, 'Daily Location Total');
new Location('Alki',16*4.6*0.5|0,16*4.6*0.75|0, 16*4.6*1|0,16*4.6*0.6|0, 16*4.6*0.8|0,16*4.6*1|0,16*4.6*0.7|0,16*4.6*0.4|0,16*4.6*0.6|0,16*4.6*0.9|0,16*4.6*0.7|0,16*4.6*0.5|0,16*4.6*0.3|0, 16*4.6*0.4|0,16*4.6*0.6|0, 'Daily Location Total');
new Location('Totals', 'total6am', 'total7am', 'total8am', 'total9am', 'total10am', 'total11am', 'total12pm', 'total1pm', 'total2pm', 'total3pm', 'total4pm', 'total5pm', 'total6pm', 'total7pm', 'total8pm', 'Daily Location Total');


// 1. create the element
// 2. give it content
// 3. append to the parent in the DOM

function renderHeader(){
  // make a tr and stick it to the DOM
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // put 'Location' in the DOM
  var tdEl = document.createElement('td');
  tdEl.textContent = 'LOCATION';
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
};

renderHeader();
for (var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
