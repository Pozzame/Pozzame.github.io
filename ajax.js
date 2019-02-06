$(document).ready(function(){
  $("button").click(function(){        
    $.ajax({
      type: "GET", 
      url: "https://jsonplaceholder.typicode.com/users/",
      success: function (data) {
        //document.getElementById("Body").innerHTML="";
        $.each(data, function(index, element){
          $("div").append($('<div>', {
            text: element.name
          }));
        });
      }
    });
  });
});




/*function loadDoc() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    document.getElementById("Info").innerHTML="";
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);

      for(let i = 0; i<users.length; i++) {
        document.getElementById("Info").innerHTML += 
        "<b>Name: </b>" + "<a href=\"#\" onclick=\"details(event,"+i+");\">" + users[i].name + "</a><br>";
      }
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" , true);
  xhttp.send();
};

function details(event,id) {
  event.preventDefault()
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      document.getElementById("Details").innerHTML ="<br><br>"+
      "<b>Email: </b>" + users[id].email + "<br>" +
      "<b>City: </b>" + users[id].address.city + "<br>" +
      "<b>Company Name: </b>" + users[id].company.name + "<br> <br>";
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users/" , true);
  xhttp.send();
};*/