// Create a "close" button and append it to each list item
var closesign = document.getElementsByTagName("li");
var i;
for (i = 0; i < closesign.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  closesign[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById('myTodo');
list.onclick = function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}

// Create a new list item when clicking on the "Add" button
var theList = [];
function newItem() {
  var li = document.createElement("li");
  var inputItem = document.getElementById("addItem").value;
  var item = document.createTextNode(inputItem);
  //var itemFound = false;
  var exists = $('#myTodo li:contains('+inputItem+')').length;
  li.appendChild(item);
  //   $('#myTodo li').each(function() {
  //   if ($(this).text() === item) {
  //     itemFound = true;
  //   }
  // });
  if (inputItem === '') {
    alert("No Item to add!");
  } 
  else if (exists){
    alert('Item already present');
    $('#addItem').val('');
  }
  else {
    document.getElementById("myTodo").appendChild(li);
    $('#addItem').val('');
  }



//   var exists = $('#myTodo li:contains('+item+')').length;
// if(!exists){
//   document.getElementById("myTodo").appendChild(li);
// }

  var span = document.createElement("SPAN");
  var closebtn = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(closebtn);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 

var inner = [];
$('li').each( function(index, Element){
    if (jQuery.inArray(this.innerHTML, inner) == -1){
      inner.push(this.innerHTML);
    }
    else {
      $(this).remove();
    }
});


// var names = document.getElementsByTagName("li");
// var inner = [];
// $('li').each( function(index, Element){
//     if (jQuery.inArray(this.innerHTML, inner) == -1){
//       inner.push(this.innerHTML);
//     }
//     else {
//       $(this).remove();
//     }
// });