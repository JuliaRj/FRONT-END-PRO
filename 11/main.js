
//  ДЗ 11.1. Таблиця піфагора



//  ДЗ 11.2. Кнопка зміни кольору
const color = document.querySelector(".color_txt");
const txt = document.querySelector(".mein_txt");
const button = document.querySelector(".change_color_btn");
button.onclick = function () {
  txt.classList.toggle("color")
};


//  ДЗ 11.3. Отримання випадкового зображення