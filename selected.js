function addSelected(event) {
    let target = event.target;
    if (target.classList.contains("book-card")) {
            target.classList.add('selected');
    }
}

function removeSelected(event) {
    let target = event.target;
    let relatedTarget = event.relatedTarget;
    if (!relatedTarget || !target.contains(relatedTarget)) {
        if (target.classList.contains("book-card")) {
            target.classList.remove('selected');
        }
    }
}

let books = document.querySelectorAll('.book-card');

books.forEach((book) => {
    book.addEventListener('mouseover', addSelected);
    book.addEventListener('mouseout', removeSelected);
});