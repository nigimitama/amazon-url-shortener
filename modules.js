function runShortener() {
  changeVisibility("resultArea", "hidden");
  changeVisibility("messageArea", "hidden");
  var url = document.forms.inputForm.textBox.value;
  if ((url === null) || (url === '')) {
    showMessage('Please Enter Url(s) of Amazon.com');
  } else {
    writeOutput();
  }
}

function writeOutput() {
  const url = document.forms.inputForm.textBox.value;
  const shortUrl = shortenUrls(url);
  if ((shortUrl === null) || (shortUrl === '')) {
    showMessage('Error: wrong input');
  } else {
    changeVisibility("resultArea", "show");
    var target = document.getElementById('result');
    target.value = shortUrl;
  }
}

function copyToClipboard() {
  var result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  // alert("copied: " + result.value);
  showMessage("copied!");
}

function showMessage(message) {
  changeVisibility("messageArea", "show");
  var p = document.getElementById("message");
  p.innerHTML = message;
}

function changeVisibility(id, value) {
  var element = document.getElementById(id);
  element.hidden = (value === "show") ? false : true;
}
