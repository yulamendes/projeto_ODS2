document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  function handleSubmitWithAlert(event, message) {
    event.preventDefault();

    // Exibe popup nativo do navegador
    const confirmado = window.confirm(message);

    if (confirmado) {
      event.target.submit();
    }
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      handleSubmitWithAlert(event, "Você deseja realmente entrar?");
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      handleSubmitWithAlert(event, "Todas as informações estão corretas?");
    });
  }
});