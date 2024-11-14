const menu = document.querySelector(".menu");
const exp = document.querySelector(".exp");

exp.addEventListener("mouseover", () => {
    menu.style.display = "flex";
})
exp.addEventListener("mouseout", () => {
    menu.style.display = "none";
})