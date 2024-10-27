
//  ДЗ 11.1. Таблиця піфагора




//  ДЗ 11.2. Кнопка зміни кольору
const txt = document.querySelector(".main_txt");
const button = document.querySelector(".btn");
button.onclick = function(){
  txt.classList.toggle("color_txt");
};


//  ДЗ 11.3. Отримання випадкового зображення
            const images = document.querySelector('.images');
            const randomNum = Math.floor(Math.random() * 9) + 1;
            const newImg = document.createElement('img');
        function showRandomImage() {
            newImg.src = randomNum + '.jpg';
            newImg.alt = 'New img';

            images.appendChild(newImg);
        }
        showRandomImage();
