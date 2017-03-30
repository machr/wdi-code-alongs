var list = [2,4,5,6,7];

function sample(arr) {
  return arr[Math.floor ( Math.random() * arr.length) ];
}

var each = function(arr, func){
  console.log(func);
};

eachElementInArray(list);
sample(list);
