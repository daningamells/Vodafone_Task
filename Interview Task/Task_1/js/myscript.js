document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    document.getElementById("customers").deleteRow(2);
    setTimeout(function() {
      sortTable();
      console.log("sorting");
      sortTable();
    }, 5000);
  }, 3000);
});

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("customers");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
