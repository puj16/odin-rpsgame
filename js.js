const button = document.querySelector("button");

function getComputerChoice() {
    const hand=["rock", "paper", "scissors"];
    const imgSrc =["https://cdn.pixabay.com/photo/2012/04/16/11/07/rock-35522_1280.png",
        "https://cdn.pixabay.com/photo/2016/10/02/03/14/paper-1708865_1280.png",
        "https://cdn.pixabay.com/photo/2012/04/26/18/43/scissors-42801_1280.png"    ]
    const randomValue =Math.random() * 3;
    const value = Math.floor(randomValue);
    const result = document.querySelector("#result");
    // result.textContent = hand[value];
    result.innerHTML = `<img src="${imgSrc[value]}" alt="${hand[value]}"><p>${hand[value]}</p>`;
}

button.addEventListener("click", getComputerChoice);