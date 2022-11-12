// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  let dataObject = {};

  for (let i = 0; i < e.target.elements.length; i++) {
    const elem = e.target.elements[i];

    if (elem.name && data.has(elem.name)) {
      if (elem.value === "") {
        alert("All fields are required");
        return;
      }
      dataObject[elem.name] = elem.value;
    }
  }
  e.target.reset();
  console.log(dataObject);
});
