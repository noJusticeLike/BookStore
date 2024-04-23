let cardsContainer = document.querySelector(".cards-container");

let authorCard = document.createElement("div");
authorCard.className = "author-card";

let authorLeft = document.createElement("div");
authorLeft.className = "author-left";
let authorImage = document.createElement("img");
authorImage.setAttribute("src", "images/authors/gerbert.jpg");
authorImage.setAttribute("alt", "Gerbert");
authorImage.setAttribute("id", "gerbert");
let authorName = document.createElement("h2");
authorName.append(document.createTextNode("Френк Герберт"));
authorLeft.append(authorImage);
authorLeft.append(authorName);

let authorRight = document.createElement("div");
authorRight.className = "author-right";
let authorText = document.createElement("p");
authorText.append(document.createTextNode(`Френк Герберт є видатним письменником науково-фантастичної літератури з Америки, який набув особливої популярності завдяки своїй знаменитій серії романів «Хроніки Дюни». Народився 8 жовтня 1920 року в Такомі, США. З раннього дитинства він мріяв стати письменником, після закінчення школи працював у декількох газетах, під час Другої світової війни Герберт був фотографом на флоті, але після шести місяців служби був комісований.
Герберт розпочав свою літературну кар'єру в 1950-х роках, пишучи в різних жанрах, включаючи наукову фантастику, фентезі, екологічний роман і трилер. Першим опублікованим твором письменника стало оповідання «Щось шукаєте?» (1952), яке було видано в газеті «Startling Stories».
Справжня популярність прийшла до письменника після того, як його роман «Світ Дюни» («Dune World»), який стане першою частиною роману «Дюна» був опублікований в журналі «Analog», де пізніше буде опублікована й друга частина - «Пророк Дюни» (The Prophet of Dune). В 1965 році обидві частини будуть об'єднані в одну книгу, яку ми знаємо під назвою «Дюна. Книга 1».`));
authorRight.append(authorText);

authorCard.prepend(authorLeft);
authorCard.append(authorRight);

cardsContainer.append(authorCard);

let kingImage = document.getElementById('king');
let newElement = document.createElement('h2');
newElement.style.marginTop = "10px";
newElement.textContent = 'Король жаху';
kingImage.after(newElement);

let bardugoImage = document.getElementById('bardugo');
let replacementElement = document.createElement('img');
replacementElement.src = "images/authors/bardugo2.jpg";
bardugoImage.replaceWith(replacementElement);

let sapkovskiyImage = document.getElementById('sapkovskiy');
sapkovskiyImage.remove();
