const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');

    function openPopup(element) {
      const title = element.getAttribute('data-title');
      const description = JSON.parse(element.getAttribute('data-description'));
      popupTitle.textContent = title;

      let listHTML = '<ul>';
      description.forEach(item => listHTML += `<li>${item}</li>`);
      listHTML += '</ul>';

      popupText.innerHTML = listHTML;
      overlay.style.display = 'block';
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closePopup() {
      overlay.style.display = 'none';
      popup.style.display = 'none';
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', closePopup);
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape" && popup.style.display === 'block') closePopup();
    });

    