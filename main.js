var ansInput = document.querySelector('#answer1');
var ansInput2 = document.querySelector('#answer2');
var ansInput3 = document.querySelector('#answer3');
var ansInput4 = document.querySelector('#answer4');
var ansInput5 = document.querySelector('#answer5');
var ansInput6 = document.querySelector('#answer6');




var avg = 0;
var sum = 0;
var length = items.length;


items.forEach(function(currentItem,index,arr) {
sum += currentItem.price;
});
ansInput.innerHTML = "The average price is $" + (sum/length).toFixed(2);


var filteredItemList = items.filter(function(currentItem, index, array){
  return currentItem.price >= 14 && currentItem.price <= 18;
} );



filteredItemList.forEach(function(item, index, arr){
 ansInput2.innerHTML += '<li>' + item.title + '</li>';
})
