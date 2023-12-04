const table = document.getElementById('statusTable');
const rows = table.getElementsByTagName('tr');
let timerId;

function startStatusCheck() {
  console.log("Check started");
  setTimeout(() => {
    timerId = setInterval(checkStatus, 5000);
  }, 3000);
}

function checkStatus() {
  console.log("Check started");
  let pendingFound = false;

  for (let i = 1; i < rows.length; i++) {
    const statusCell = rows[i].getElementsByTagName('td')[1];

    if (statusCell.textContent.trim() === 'Pending') {
      statusCell.textContent = 'Done';
      pendingFound = true;
      break;
    }
  }

  if (!pendingFound) {
    stopStatusCheck();
  }
}

function stopStatusCheck() {
  clearInterval(timerId);
  console.log("Status check stopped");
}




let timeoutId;

function handleInput(inputField) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const otherFieldId = inputField.id === "textField1" ? "textField2" : "textField1";
    const otherField = document.getElementById(otherFieldId);
    otherField.value = inputField.value;
  }, 1000);
}