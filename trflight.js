window.addEventListener("load", load);
function load() {
var main = document.getElementById('main');
main.style.backgroundColor = 'yellow';
console.log(main.style.backgroundColor);
};


document.addEventListener("DOMContentLoaded", loadgreen);
var loadgreen = setTimeout(function load2() {
  var main2 = document.getElementById('main');
  main2.style.backgroundColor = 'green';
  console.log(main2.style.backgroundColor);
}, 4000);

window.addEventListener("beforeunload", load3);
function load3() {
  var main3 = document.getElementById('main');
  main3.style.backgroundColor = 'red';
  console.log(main3.style.backgroundColor);
};

/*

window.addEventListener('beforeunload', function(event) {
console.log('I am the 1st one.');
});*/

// is equivalent to

 // this synchronous script is going to delay parsing of the DOM. So the DOMContentLoaded event is going to launch later.


/*window.load

function traffic() {
  document.addEventListener("DOMContentLoaded", function(event) {
    if (window.load = true) {
      alert('red');
    }
    for(var i=0; i<1000; i++)
    {console.log("DOM fully loaded and parsed");}
}
  }

(function loading() {
  console.log(window.load);
  console.log(window.onbeforeunload);
  console.log(window.onunload);
}());

    document.body.append('section');
    var elem = document.getElementsByTagName('section');
    console.log(elem);
    elem.style.backgroundColor = 'blue';
  });

//window.onunload
//window.onload
//window.onbeforeunload

var main = document.getElementsByTagName('body');
console.log(main);
main[0].style.backgroundColor = 'green';

/*  document.addEventListener("click", function(){
      console.log('click on document');
  });

  var div = document.getElementById("demo");

  div.addEventListener("click", function(){
      console.log('click on div');
  });*/
