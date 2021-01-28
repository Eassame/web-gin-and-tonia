function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

var contactForm = document.getElementById("contactUsForm");
contactForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var data = new FormData(ev.target);
  var responseP = document.getElementById("response");
  var dataArray = Array.from(data.entries("name"));
  var name = sanitizeString(dataArray[0][1]);
  var email = sanitizeString(dataArray[1][1]);
  var phone = sanitizeString(dataArray[2][1]);
  var message = sanitizeString(dataArray[3][1]);

  var inputs = [name, email, phone, message];
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!input || input.length === 0) {
      if (!responseP.classList.contains("error")) {
        responseP.classList.add("error");
      }
      responseP.innerHTML = "Please fill in all fields!";
      return;
    }
  }

  var request = new XMLHttpRequest();
  request.open("POST", "https://app.99inbound.com/api/e/BLK_EVlf");
  request.send(data);
  request.onload = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      if (responseP.classList.contains("error")) {
        responseP.classList.remove("error");
      }
      responseP.innerHTML = "Message Sent!";
    }
  };
});
