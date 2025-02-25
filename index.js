const accordions = document.querySelectorAll(".accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const body = accordion.querySelector(".conteudo-accordion");
        body.classList.toggle("active")
    })
})