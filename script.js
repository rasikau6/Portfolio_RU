const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Thanks for reaching out! I'll get back to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  });
});
