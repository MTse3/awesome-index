'use strict';

var people = [ 
  { 
    name: 'Trinity', 
    occupation: 'programmer', 
    awesomeIndex: 10 
  }, 
  { 
    name: 'Mater', 
    occupation: 'tow truck' 
  }, 
  { 
    name: 'Number 5', 
    occupation: 'programmer', 
    awesomeIndex: 7 
  }, 
  { 
    name: 'Alice', 
    occupation: 'programmer', 
    awesomeIndex: 9 
  }, 
  { 
    name: 'Zaphod', 
    occupation: 'President of the Galaxy' 
  }, 
  { 
    name: 'Bob Parr', 
    occupation: 'programmer', 
    awesomeIndex: 6 
  } 
];
//obtains value of awesomeIndex
var sumAwesomeIndex = 0;
var numberOfEntries = 0;
for (var i = 0; i < people.length; i++) {
  sumAwesomeIndex += people[i]['awesomeIndex'];
  if (people[i].awesomeIndex) {
    numberOfEntries++;
  };
};

console.log(sumAwesomeIndex);
console.log(numberOfEntries);

//make table data
var mean, table, tr, td, average;
  mean = sumAwesomeIndex / numberOfEntries;
  table   = document.getElementById('awesome-index')
  tr      = document.createElement('tr');
  td      = document.createElement('td');
  average = document.createTextNode(mean);
  td.appendChild(average);
  tr.appendChild(td);
  table.appendChild(tr);









