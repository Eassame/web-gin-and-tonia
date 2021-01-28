function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

var contactForm = document.getElementById("contactUsForm");
contactForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  var data = new FormData(ev.target);
  var dataArray = Array.from(data.entries("name"));
  var name = sanitizeString(dataArray[0][1]);
  var email = sanitizeString(dataArray[1][1]);
  var phone = sanitizeString(dataArray[2][1]);
  var message = sanitizeString(dataArray[3][1]);

  console.log({
    name,
    email,
    phone,
    message,
  });
});
