

   // ===== SCRIPT DO CARROSSEL =====
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-pro .slide');
    const totalSlides = slides.length;
    const intervaloTroca = 6000; // tempo entre imagens (6s)

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= totalSlides) {
        currentSlide = 0; // volta para a primeira imagem
      }
      showSlide(currentSlide);
    }

    setInterval(nextSlide, intervaloTroca);