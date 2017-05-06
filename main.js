var ansInput1 = document.querySelector('#answer-1');
var ansInput2 = document.querySelector('#answer-2');
var ansInput3 = document.querySelector('#answer-3');
var ansInput4 = document.querySelector('#answer-4');
var ansInput5 = document.querySelector('#answer-5');
var ansInput6 = document.querySelector('#answer-6');

var avg = 0;
var sum = 0;
var length = items.length;

// #1
items.forEach(function(currentItem,index,arr) {
sum += currentItem.price; // takes the price property from the currentItem
});  // keeps a running total called sum.
ansInput1.innerHTML = "The average price is $" + (sum/length).toFixed(2);
// Puts the answer output into the html Doc   toFixed rounds the avg price to 0.00

// #2
var filteredItemList = items.filter(function(currentItem, index, array){
  return currentItem.price >= 14 && currentItem.price <= 18;
} );

filteredItemList.forEach(function(item, index, arr){
 ansInput2.innerHTML += '<li>' + item.title + '</li>';
})


// #3

var filteredCurrency = items.filter(function(currentItem, index, array) {
  return currentItem.currency_code === 'GBP';
})

filteredCurrency.forEach(function(item, index, arr) {
ansInput3.innerHTML = item.title + " costs " +  '£' + item.price;
})


// #4
var isWood = items.filter(function (currentItem, index, array) {
   return currentItem.materials.some(function(currentItem, index, array) {
     return currentItem === 'wood'; // some() is a method that tests whether
   }); // some element in the array passes the test implemented by the provided
}); // function

var hasWood = isWood.map(function(item, index, array) {
 return '<li>' + item.title + ' is made of wood.</li>';
});

hasWood.forEach(function(item, index, array) {
 ansInput3 = document.querySelector('ul#fourl');
 ansInput4.innerHTML += item;
});

// ------------------------- Question 5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// var eightOrMore = items.filter(function(currentItem, index, array){
//   return currentItem.materials.length >= 8;
// });
//map out materials first
//use reduce to put materials into an empty string

var eightOrMore = items.filter(function(currentItem, index, array){
  return currentItem.materials.length >= 8;
});

var eightOrMoreMat = eightOrMore.map(function(item, index, array){
 return item.materials;
});



eightOrMore.forEach(function(currentItem, index, array){


  ansInput5.innerHTML += '<li>'+ currentItem.title  + " has " + currentItem.materials.length + " materials.</li>";
  ansInput5.innerHTML += '<li>'+ currentItem.materials +'</li>'

});

// #6

//how many items were made by their sellers?
//  18 were made by their sellers
// "who_made": "i_did",
var madeBySellers = items.filter(function(currentItem, index, array){
  return currentItem.who_made === "i_did";
})
ansInput6.innerHTML = madeBySellers.length + " were made by their sellers"
