       //  ДЗ 12.1. Переход на сторінку
       const btn = document.querySelector('.btn1');
       const linkBtn = document.querySelector('.btn2');
       let promtLink = "";
 
 
       btn.addEventListener('click', () => {
          promtLink = prompt('Введіть ссилку');
 
       });
       linkBtn.addEventListener('click', () =>{
          location.href = promtLink;
       })
 
 
       //  ДЗ 12.2. Використання подій
       const buttons = document.querySelector(".parental_controls");
       buttons.addEventListener("click", function (event) {
          if (event.target.tagName === "BUTTON"){
            alert(event.target.textContent);
          }
 
       })
 
       //  ДЗ 12.3. TODO лист
        const button = document.querySelector('.task.btn');
        const task = document.querySelector('.task');
        const inputElement = document.querySelector('input');
        button.addEventListener('click', () =>{
          const newItemLi = document.createElement('li');
          const newItemP = document.createElement('p');
          const newItemButton = document.createElement('button');
          newItemP.textContent = inputElement.value;
          newItemButton.textContent = 'Видалити';
          newItemButton.classList = 'close';
          task.appendChild(newItemLi);
          newItemLi.appendChild(newItemP);
          newItemLi.appendChild(newItemButton);
 
        })
        task.addEventListener('click', function (event){
              if (event.target.tagName === "BUTTON"){
                  event.target.closest('li').remove();
              }
        })
