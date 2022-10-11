let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modal-btn");
let closeBtn = document.getElementById("closeBtn");

modalBtn.addEventListener("click", () => {
    modal.style.display = "block"
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
});

// outside click
window.addEventListener('click', (e) => {
    if(e.target == modal)
    modal.style.display = "none"
})
