// Діалог з користувачем

function userDialog() {
    let repeat = true;

    while (repeat) {
        let name = prompt("Введіть ваше ім'я");
        let age = prompt("Скільки вам років?");

        if (name === '' || age === '') {
            alert("Будь ласка, заповніть всі поля");
            continue;
        }
        else if (isNaN(age)) {
            alert("Будь ласка, введіть числове значення для віку.");
            continue;
        }
        else if (age < 18) {
            alert("Привіт, " + name + "! Ви ще доволі молоді");
        } else {
            alert("Привіт, " + name + "! Ви вже доволі дорослі");
        }

        repeat = confirm("Хочете повторити діалог?");
    }
}

let dialog = document.querySelector("#dialog");
dialog.onclick = userDialog;

// Інформація про розробника сторінки

function showDeveloperInfo(surname, name, role="Front-end dev") {
 alert("Інформація про розробника:\nпрізвище: " + surname + ", ім'я: " + name + ", посада: " + role);
}

let dev = document.querySelector("#dev");
dev.onclick = function() {
    showDeveloperInfo("Слива", "Денис");
}

// Порівняння рядків

function compareString(str1, str2) {
    if (str1 > str2) {
        alert(`Рядок "${str1}" є більшим рядком`);
    }
    else if (str2 > str1) {
        alert(`Рядок "${str2}" є більшим рядком`);
    }
    else {
        alert("Рядки рівні");
    }
}

let compare = document.querySelector("#compare");
compare.onclick = function() {
    str1 = prompt("Введіть перший рядок: ");
    str2 = prompt("Введіть другий рядок: ");
    compareString(str1, str2);
}

// Зміна фону сторінки
document.body.style.backgroundColor = 'yellow';
setTimeout(() => {
    document.body.style.backgroundColor = 'bisque';
}, 30000);

// Перенаправлення браузера на іншу сторінку
let redirect = document.getElementById("redirect");
redirect.onclick = function() {
    window.location.href = "contacts.html";
}

