document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяет стандартное поведение ссылки

        const targetId = this.getAttribute('href').substring(1); // Получаем ID из href
        const targetElement = document.getElementById(targetId); // Находим секцию по ID

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Прокручиваем страницу к верхнему краю секции
                behavior: 'smooth' // Делаем плавный скролл
            });
        }
    });
});

window.scrollTo({
    top: targetElement.offsetTop - 50, // Поднимаем на 50px выше
    behavior: 'smooth'
});


