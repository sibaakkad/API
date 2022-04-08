var x
var option1, option2, option3
var userData

function myFunction() {
  clearTable()
  x = document.getElementById("mySelect").value;
  if (x == 'option1') {
    editToTable(option1)
  }
  else if (x == 'option2') {
    editToTable(option2)
  }
  else if (x == 'option3') {
    editToTable(option3)
  }
}
function clearTable() {
  var tb = document.getElementById('tableID');
  while (tb.rows.length > 1) {
    tb.deleteRow(1);
  }
}
function editToTable(option) {

  option.forEach(item => {
    var tableRef = document.getElementById("tableID");
    var newRow = tableRef.insertRow(-1);

    var newCell = newRow.insertCell(0);
    const img = document.createElement("img");
    img.src = item.picture.thumbnail;
    newCell.appendChild(img);

    newCell = newRow.insertCell(1);
    let newText = document.createTextNode(item.name.title + ". " + item.name.first + " " + item.name.last);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(2);
    newText = document.createTextNode(item.dob.age);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(3);
    newText = document.createTextNode(item.phone);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(4);
    newText = document.createTextNode(item.email);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(5);
    newText = document.createTextNode(item.location.street.name + " ," + item.location.city + " ," + item.location.state + " ," + item.location.postcode + " .");
    newCell.appendChild(newText);
  });
}
fetch('https://randomuser.me/api/?results=100').then(
  response => response.json()
).then(responseJosn => {
  option1 = responseJosn.results.filter(item => item.dob.age >= 0 && item.dob.age <= 30)
  option2 = responseJosn.results.filter(item => item.dob.age >= 31 && item.dob.age <= 50)
  option3 = responseJosn.results.filter(item => item.dob.age >= 51)
});
