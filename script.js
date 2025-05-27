function handleSubmit(event) {
  event.preventDefault(); // Stop normal form submission
  const form = event.target;
  const confirmation = document.getElementById('confirmation');

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      confirmation.style.color = 'lightgreen';
      confirmation.textContent = "Thanks! I'll get back to you soon 😊";
      confirmation.style.display = 'block';
      form.reset();
    } else {
      confirmation.style.color = 'orange';
      confirmation.textContent = "Oops! Something went wrong.";
      confirmation.style.display = 'block';
    }
  }).catch(() => {
    confirmation.style.color = 'orange';
    confirmation.textContent = "Oops! Something went wrong.";
    confirmation.style.display = 'block';
  });

  return false;
}
