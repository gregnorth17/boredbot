const btn = document.querySelector(".btn");

const clickBtn = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".activity").textContent = data.activity
            document.querySelector(".title").textContent = "🦾Happybot🦿";
            document.body.classList.add("fun");
        })
}

btn.addEventListener("click", clickBtn)