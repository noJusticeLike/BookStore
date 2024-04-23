let bookCards = document.querySelectorAll('.book-card');
let manipulate = document.querySelector("#manipulate");

manipulate.onclick = function() {
    bookCards.forEach(card => {
        const title = card.querySelector('h2');
        title.innerHTML += ' ❤️';
    
         const text = card.querySelector('p');
         text.outerHTML += '<p>Замовте зараз та отримайте знижку!</p>';

        const button = card.querySelector('button');
        button.textContent = 'Читати далі';

        const authorLink = card.querySelector('a').firstChild;
        authorLink.data = "Автор";
    });
}