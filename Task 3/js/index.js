IDENTIFICATORS = {
  table: 'statusTable',
  row: 'tr',
  element: 'td',
  start: "Check started",
  stop: "Status check stopped"
}
STATUSES = {
  Pending: 'Pending',
  Done: 'Done'
}

const table = document.getElementById(IDENTIFICATORS.table);
const rows = table.getElementsByTagName(IDENTIFICATORS.row);

let timerId;

function startStatusCheck() {
  console.log(IDENTIFICATORS.start);
  setTimeout(() => {
    timerId = setInterval(checkStatus, 5000);
  }, 3000);
}

function checkStatus() {
  console.log(IDENTIFICATORS.start);
  let pendingFound = false;

  for (let i = 1; i < rows.length; i++) {
    const statusCell = rows[i].getElementsByTagName(IDENTIFICATORS.element)[1];

    if (statusCell.textContent.trim() === STATUSES.Pending) {
      statusCell.textContent = STATUSES.Done;
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
  console.log(IDENTIFICATORS.stop);
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