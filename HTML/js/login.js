document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById('formContainer');
  const formOpen = document.getElementById('form-open');
  const formClose = document.getElementById('formClose');

  formOpen.addEventListener('click', () => {
    formContainer.classList.toggle('active');
  });

  formClose.addEventListener('click', () => {
    formContainer.classList.remove('active');
  });
});