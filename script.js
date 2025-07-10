document.getElementById("loginModal").classList.add("show");
document.getElementById("loginModal").classList.remove("show");

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmpassword");
    const countryInput = document.getElementById("country");

    const errorName = document.getElementById("nameE");
    const errorEmail = document.getElementById("emailE");

    const errorPassword = document.getElementById("passwordE");
    const errorConfirm = document.getElementById("confirmE");
    
    const errorCountry = document.getElementById("countryE");
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
      }
       else {
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

     const validCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica",
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia",
  "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

countryInput.addEventListener("input", () => {
  const country = countryInput.value.trim().toLowerCase();
  const isValid = validCountries.some(c => c.toLowerCase() === country);

  if (!isValid) {
    errorCountry.textContent = "Please enter a valid country name.";
  } else {
    errorCountry.textContent = "";
  }
});

  
    
    document.querySelector("form").addEventListener("submit", (e) => {
       if (
      errorName.textContent ||
      errorEmail.textContent ||
      errorPassword.textContent ||
      errorConfirm.textContent ||
      errorCountry.textContent || 
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !passwordInput.value.trim() ||
      !confirmPasswordInput.value.trim() ||
      !countryInput.value.trim() 
    ) {
      e.preventDefault();
      alert("Please fix the errors before submitting.");
    }
    });
  });