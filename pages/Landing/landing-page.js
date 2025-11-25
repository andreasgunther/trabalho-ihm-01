let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    slides[n].classList.add("ativo");
}

function avancar() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

function voltar() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}

// Autoplay a cada 3 segundos
setInterval(avancar, 3000);
