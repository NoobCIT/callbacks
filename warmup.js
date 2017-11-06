// My each
Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback.call(this, this[i])
  }
};

[1,2,3,4].myEach(console.log);
//function myEach(array, callback) {
//  for (var i = 0; i < array.length; i++) {
//    callback(array[i]);
//  };
//};

//myEach([1,2,3,4], function(item) {
//  console.log(item);
//});

// myMap

//function myMap(array, callback) {
//  var new_array = [];
//  new_array.push(callback(myEach(array, function(item) {
//    console.log(item);
//  });
//));
//};

Array.prototype.myMap = function(callback) {
  var results = [];
  this.myEach(function(i) {
    results.push(callback(i));
  });
  return results;
};

[1,2,3,4].myMap(function(item) {
  return item * 2;
});
