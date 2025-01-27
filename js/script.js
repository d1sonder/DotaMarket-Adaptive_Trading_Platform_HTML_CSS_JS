document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
  
        if (answer.style.display === 'none') {
          answer.style.display = 'block';
        } else {
          answer.style.display = 'none';
        }
      });
    });
  });


          const buttons = document.querySelectorAll('.pudge-div button');
          buttons.forEach(button => {
              button.addEventListener('click', () => {
                  alert('Это витрина редких предметов, они не продаются');
              });
          });

        
          const burgerIcon = document.querySelector('.burger-icon');
          const menuMobile = document.querySelector('.spis-mobile');
          
          burgerIcon.addEventListener('click', () => {
              menuMobile.classList.toggle('active');
          });  

          
          function openModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'block';
        }
        
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        }
        function pay() {
            alert('Успешно оплачено!');
            location.reload();
            closeModal();
        }
        document.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
        closeModal();
        }
        });   

          



