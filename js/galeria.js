let index = 0;

function moveCarousel(direction) {
  const track = document.getElementById('carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Detecta quantos itens devem aparecer
  let visibleItems = window.innerWidth < 992 ? 1 : 2; // 1 em telas pequenas, 2 em grandes

  index += direction;
  if (index < 0) index = 0;
  if (index > totalItems - visibleItems) index = totalItems - visibleItems;

  const offset = index * (100 / visibleItems);
  track.style.transform = `translateX(-${offset}%)`;
}

function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = src;
}

window.addEventListener("resize", () => {
  // Reajusta ao mudar o tamanho da tela
  moveCarousel(0);
});

