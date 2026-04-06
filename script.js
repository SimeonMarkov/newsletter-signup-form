const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');
const emailRequiredSpan = document.querySelector(".email-required");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(!emailInput.value) {
        emailRequiredSpan.classList.remove("hidden");
        emailInput.focus()
        return;
    }
    setTimeout(() => {
        sessionStorage.setItem("email", emailInput.value);
        location.assign("thank_you.html")
    }, 1000)
})

function isEmailValid(email) {
    return email && /[\w-.]+@([\w-]+\.)+[\w-]{2,4}/.test(email);
}

emailInput.addEventListener("input", (e) => {
    if(!isEmailValid(e.target.value)) {
        e.target.classList.add("invalid");
        emailRequiredSpan.classList.remove("hidden");
        submitBtn.classList.remove("enabled");
        submitBtn.classList.add("disabled");
    } else {
        e.target.classList.remove("invalid");
        emailRequiredSpan.classList.add("hidden");
        submitBtn.classList.add("enabled");
        submitBtn.classList.remove("disabled");
    }
})