async function start() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const numbers = document.querySelectorAll(".counter span");

    // Using for...of loop to wait for the async operation in each iteration
    for (let number of numbers) {
        number.classList.add("in");
        setTimeout(() => {
            number.classList.remove("in");
        }, 1200);
        await delay(1200); // Pause for 1 second before the next iteration
    }
    counting.classList.add("hidden");
    ready.classList.remove("hidden");
}

const ready = document.getElementById("ready");
const counting = document.getElementById("counting");

ready.addEventListener("click", ()=>{
    ready.classList.add("hidden");
    counting.classList.remove("hidden");
});

