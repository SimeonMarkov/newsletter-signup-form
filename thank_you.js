const dismissBtn = document.getElementById('dismiss-btn');
const thxMessage = document.querySelector('.thx-message p');

document.addEventListener('DOMContentLoaded', () => {
    thxMessage.innerHTML = (`A confirmation email has been sent to <strong>${sessionStorage.getItem("email")}</strong>.
        Please open it and click the button inside to confirm your subscription.`);
})

dismissBtn.addEventListener("click", (e) => {
    console.log("clicked again");
    location.assign("index.html")
})
