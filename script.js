function tip() {
  var bill = document.getElementById("billAmount").value;
  var tip = document.getElementById("tipList").value.slice(0, 2);
  var personNumber = document.getElementById("persons").value;

  var result = parseInt(bill) * parseFloat(tip / 100).toFixed(2);
  var total = parseInt(bill) + result;
  var each = parseInt(result) / parseInt(personNumber);

  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML =
    "Tip Amount :$" +
    result.toFixed(2) +
    "<br>" +
    "Tip for each person :$" +
    each.toFixed(2) +
    "<br>" +
    "Total Amount :$" +
    total.toFixed(2);
  document.getElementById("result").style.display = "block";
}
