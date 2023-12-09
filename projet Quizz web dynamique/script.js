document.addEventListener("DOMContentLoaded", function() {
    const alertMessage = document.getElementById('alert');
    alertMessage.style.display = 'none'; 
  
    const form = document.getElementById('quiz-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const questions = document.querySelectorAll('.question-item');
      let allCorrect = true;
  
      questions.forEach((question) => {
        const answers = question.querySelectorAll('.answer');
        let isAnswered = false;
  
        answers.forEach((answer) => {
          if (answer.checked) {
            isAnswered = true;
            const value = answer.value;
            const isCorrect = value === 'true';
  
            if (isCorrect) {
              question.classList.remove('mauvaiserep'); 
              question.classList.add('bonnerep');
            } else {
              question.classList.remove('bonnerep'); 
              question.classList.add('mauvaiserep');
              allCorrect = false;
            }
          }
        });
  
        if (!isAnswered) {
          question.classList.remove('bonnerep', 'mauvaiserep'); 
          allCorrect = false;
        }
      });
  
      if (allCorrect) {
        alertMessage.classList.add('bonnerep');
        alertMessage.style.display = 'block'; 
      } 
    });
  
    const answers = document.querySelectorAll('.answer');
  
    
    answers.forEach((answer) => {
      answer.addEventListener('change', function() {
        const questionItem = answer.closest('.question-item');
        questionItem.classList.remove('bonnerep', 'mauvaiserep'); 
        alertMessage.style.display = 'none'; 

      });
    });
  });