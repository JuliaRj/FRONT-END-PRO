 //  ДЗ 11.1. Таблиця піфагора
 const tabl = document.querySelector('.tabl');
 const newTabl = document.createElement('table');
 
 function showPifTable() {
 
     for (let i = 1; i <= 10; i++) {
         const tr = document.createElement('tr');
         newTabl.appendChild(tr);
         for (let j = 1; j <= 10; j++) {
             const td = document.createElement('td');
             tr.appendChild(td);
             td.textContent = i * j;
         }
     }
 
     tabl.appendChild(newTabl);
 }
 showPifTable();
 
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
             newImg.src = 'img/' + randomNum + '.jpg';
             newImg.alt = 'New img';
 
             images.appendChild(newImg);
         }
         showRandomImage();