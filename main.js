var ansOutput1 = document.querySelector('#answer1');
var ansOutput2 = document.querySelector('#answer2');
var ansOutput3 = document.querySelector('#answer3');
var ansOutput4 = document.querySelector('#answer4');
var ansOutput5 = document.querySelector('#answer5');
var ansOutput6 = document.querySelector('#answer6');

var avg = 0;
var sum = 0;
var length = items.length;

// #1
items.forEach(function(currentItem,index,arr) {
sum += currentItem.price; // takes the price property from the currentItem
});  // keeps a running total called sum.
ansOutput1.innerHTML = "The average price is $" + (sum/length).toFixed(2);
// Puts the answer output into the html Doc   toFixed rounds the avg price to 0.00

// #2
var filteredItemList = items.filter(function(currentItem, index, array){
  return currentItem.price >= 14 && currentItem.price <= 18;
} );

filteredItemList.forEach(function(item, index, arr){
 ansOutput2.innerHTML += '<li>' + item.title + '</li>';
})


// #3

var filteredCurrency = items.filter(function(currentItem, index, array) {
  return currentItem.currency_code === 'GBP';
})

filteredCurrency.forEach(function(item, index, arr) {
ansOutput3.innerHTML = item.title + " costs " +  '£' + item.price;
})


// #4
var IsWood = items.filter(function (currentItem, index, array) {
   return currentItem.materials.some(function(currentItem, index, array) {
     return currentItem === 'wood';
   });
});

var hasWood = IsWood.map(function(item, index, array) {
 return '<li>' + item.title + ' is made of wood.</li>';
});

hasWood.forEach(function(item, index, array) {
 ansInput3 = document.querySelector('ul#fourl');
 ansOutput4.innerHTML += item;
});




// #5
