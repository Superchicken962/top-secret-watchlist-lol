document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
      return false;
   }
  }

function password() {
    var keyentered = prompt("Enter password to continue")
    var x = document.getElementById("toggle-blocker");
    if (keyentered == GlDkju) {
       x.style.display = "none";
    }
    else {
        x.style.display = "block";
        window.location.replace("wrong.html");
    }
}

function searchpersonslist() {
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById('search-persons-list');
   filter = input.value.toUpperCase();
   ul = document.getElementById("persons-list");
   li = ul.getElementsByTagName('li');
 
   for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       li[i].style.display = "";
     } else {
       li[i].style.display = "none";
     }
   }
 }

var inputvar = "hi";
document.getElementById("passwordchecker").value = test;
