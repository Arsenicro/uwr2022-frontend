function f1(a,b) {
  return a + b;
}

console.log( 
  f1(1,2) 
)

const f2 = function() {
  return f1;
}

function f3(a) {
 return a(1,2)
}

f2()(1,2)

console.log(f3(f1))