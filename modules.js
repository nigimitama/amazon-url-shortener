function writeOutput() {
  var target = document.getElementById('output');
  if (target != null) {
    target.remove();
    var copyButton = document.getElementById('copyButton');
    copyButton.remove();
  }
  target = createOutputTarget();
  var url = document.forms.inputForm.textBox.value;
  target.value = shortenUrl(url);
  createCopyButton();
}

function createOutputTarget() {
  var target = document.createElement('textarea');
  target.setAttribute('id', 'output');
  target.classList.add('form-control');
  var outputArea = document.getElementById("outputArea");
  outputArea.appendChild(target);
  return target;
}

function createCopyButton() {
  var button = document.createElement('button');
  button.setAttribute('onclick', 'copyToClipboard()');
  button.setAttribute('id', 'copyButton')
  button.classList.add('btn');
  button.classList.add('btn-light');
  button.classList.add('my-1');
  button.innerText = 'copy';
  var outputArea = document.getElementById("outputArea");
  outputArea.appendChild(button);
}

function copyToClipboard() {
  var copyTarget = document.getElementById("output");
  copyTarget.select();
  document.execCommand("copy");
  // alert("copied: " + copyTarget.value);
  notifyCopied();
}

function notifyCopied() {
  var outputArea = document.getElementById("outputArea");
  var p = document.createElement('p');
  outputArea.appendChild(p);
  p.innerText = 'copied!';
}

