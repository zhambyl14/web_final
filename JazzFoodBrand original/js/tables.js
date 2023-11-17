document.addEventListener('DOMContentLoaded', function () {
    var tableButtons = document.querySelectorAll('.table-button');

    tableButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var tableNumber = button.textContent.trim();

        document.getElementById('inputTable').value = tableNumber;
      });
    });
});

document.getElementById("submitformbutton").addEventListener("click", function(){
    alert("You have successfully booked a table")
})