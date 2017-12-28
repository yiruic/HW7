$.each(data, function(key, value) {
      var tr = $("<tr />")
     $.each(value, function(k, v) {
       tr.append(
         $("<td />", {
           html: v
          })[0].outerHTML
       );
      $("table tbody").append(tr)
     })
   })


var table = document.getElementById("traintable");

var tr = document.createElement("tr");
var td = document.createElement("td");
var txt = document.createTextNode("some value");

td.appendChild(txt);
tr.appendChild(td);
table.appendChild(tr);