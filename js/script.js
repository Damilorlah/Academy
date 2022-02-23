const hamburger = document.querySelector(".hamburger");
const navulbar = document.querySelector(".nav-ulbar");


hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navulbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navulbar.classList.remove("active");
    }))