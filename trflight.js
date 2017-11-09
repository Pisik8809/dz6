window.addEventListener("load", load);
function load() {
var main = document.getElementById('main');
main.style.backgroundColor = 'yellow';
console.log(main.style.backgroundColor);
};


document.addEventListener("DOMContentLoaded", setTimeout(function load2() {
  var main2 = document.getElementById('main');
  main2.style.backgroundColor = 'green';
  console.log(main2.style.backgroundColor);
}, 4000));

window.addEventListener("beforeunload", load3);
function load3() {
  var main3 = document.getElementById('main');
  main3.style.backgroundColor = 'red';
  console.log(main3.style.backgroundColor);
};

console.log(navigator.userAgent);
