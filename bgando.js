//Functinal JS exercises

/*
1.  Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).
*/

function funcCaller(argument, callback) {
  return callback(argument);
};

/*
2.  Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.
*/

function firstVal(arr, callback) {
  callback(arr[0], 0, arr);
};

/*
3.  Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.
*/

function firstVal(data, callback) {
  if (data === 'array') {
    callback(data[0], 0, data);
  } else if (data === 'object') {
    var object = Object.keys(data);
    callback(object[0], 0, data);
  }
};

/*
4.  [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that takes a function and returns a version of that function which can only be called once. [Hint: you need a closure] You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:
*/

//Thhis is an attempt not sure.
var once = (function (callback) {
  var called = false;
  if (called) {
    console.log('can only be called once');
  } else {
    return callback;
    called = true;
  }
});
