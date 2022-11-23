var a;

console.log(a);

a = 1;


f1()

//console.log(b)

function f1() {
  var b = 2;
  console.log(a)
}

const f2 = function () {
  console.log(2);
}

f2()

var x = 7;

{
  console.log(x);
  const x = 1;
}

