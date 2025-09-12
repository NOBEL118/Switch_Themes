const body = document.body;
const buttons = document.querySelectorAll('button');
const head = document.querySelector('h1');
function theme() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.id === "dark") {
                body.style.backgroundColor = "black";
                head.innerText = "Dark Mode On";
                head.style.color = "white";
                console.log("dark mode on");

            } else if (e.target.id === "blue") {
                body.style.backgroundColor = "blue";
                head.innerHTML = "Blue Mode On";
                head.style.color = "white";
                console.log("blue mode on");

            } else if (e.target.id === "pink") {
                body.style.backgroundColor = "pink";
                head.innerHTML = "Pink Mode On";
                head.style.color = "black";
                console.log("pink mode on");

            } else {
                body.style.backgroundColor = "white";
                head.innerHTML = "Light Mode On";
                head.style.color = "pink";
                console.log("light mode on");

            }

        });
    });
}

theme();
