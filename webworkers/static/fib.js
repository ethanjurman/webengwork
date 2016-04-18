// fib.js
function fib(n){
  if (n < 2) { return n; }
  return fib(n - 1) + fib(n - 2);
}

onmessage = function(event) {
  console.log("solving fib(" + event.data + ")");
  const result = fib(event.data);
  postMessage(result);
}
