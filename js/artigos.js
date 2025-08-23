    // Accordion por ano
    const yearToggles = document.querySelectorAll('.year-toggle');
    yearToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const list = toggle.nextElementSibling;
        if(list.style.maxHeight && list.style.maxHeight !== "0px"){
          list.style.maxHeight = "0";
          toggle.classList.remove('open');
        } else {
          list.style.maxHeight = list.scrollHeight + "px";
          toggle.classList.add('open');
        }
      });
    });

    // Busca de artigos
    const searchInput = document.getElementById('search-articles');
    searchInput.addEventListener('input', function(){
      const searchTerm = this.value.toLowerCase();
      const articles = document.querySelectorAll('.article-list li');
      articles.forEach(li => {
        const text = li.textContent.toLowerCase();
        const parentList = li.parentElement;
        const toggle = parentList.previousElementSibling;
        if(text.includes(searchTerm)){
          li.style.display = '';
          parentList.style.maxHeight = parentList.scrollHeight + "px";
          toggle.classList.add('open');
        } else {
          li.style.display = 'none';
        }
      });
    });