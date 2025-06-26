document.getElementById("loginModal").classList.add("show");
document.getElementById("loginModal").classList.remove("show");


document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmpassword");
  
    const errorName = document.getElementById("nameE");
    const errorEmail = document.getElementById("emailE");
    const errorPassword = document.getElementById("passwordE");
    const errorConfirm = document.getElementById("confirmE");
  
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length < 3) {
        errorName.textContent = "Name must be at least 3 characters.";
      } else {
        errorName.textContent = "";
      }
    });
  
    emailInput.addEventListener("input", () => {
      if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        errorEmail.textContent = "Enter a valid email address.";
      } else {
        errorEmail.textContent = "";
      }
    });
  
    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length < 6) {
        errorPassword.textContent = "Password must be at least 6 characters.";
      } else {
        errorPassword.textContent = "";
      }
  
      if (confirmPasswordInput.value !== passwordInput.value) {
        errorConfirm.textContent = "Passwords do not match.";
      } else {
        errorConfirm.textContent = "";
      }
    });
  
    confirmPasswordInput.addEventListener("input", () => {
      if (confirmPasswordInput.value !== passwordInput.value) {
        errorConfirm.textContent = "Passwords do not match.";
      } else {
        errorConfirm.textContent = "";
      }
    });
  
    
    document.querySelector("form").addEventListener("submit", (e) => {
      if (
        errorName.textContent ||
        errorEmail.textContent ||
        errorPassword.textContent ||
        errorConfirm.textContent
      ) {
        e.preventDefault();
      }
    });
  });
