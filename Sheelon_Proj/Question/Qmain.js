document.addEventListener("DOMContentLoaded", function() {
    const questionnaireForm = document.getElementById("questionnaireForm");
  
    questionnaireForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const responses = [];
      
      for (let i = 1; i <= 6; i++) {
        const scaleAnswer = document.querySelector(`input[name="scaleAnswer${i}"]:checked`);
        const verbalAnswer = document.getElementById(`verbalAnswer${i}`).value;
        const binaryAnswer = document.querySelector(`input[name="binaryAnswer${i}"]:checked`);
        
        if (scaleAnswer && verbalAnswer && binaryAnswer) {
          responses.push({
            scale: scaleAnswer.value,
            verbal: verbalAnswer,
            binary: binaryAnswer.value
          });
        } else {
          alert("Please answer all questions.");
          return;
        }
      }
      
      console.log(responses);
    });
  });
  
      const personalBackground = document.getElementById("personalBackground").value;
      const learningAbility = document.getElementById("learningAbility").value;
      const commitmentToStudies = document.getElementById("commitmentToStudies").value;
      const socialEase = document.getElementById("socialEase").value;
      const selfDiscipline = document.getElementById("selfDiscipline").value;
      const emotionalResilience = document.getElementById("emotionalResilience").value;
      
      const scaleAnswer = document.querySelector('input[name="scaleAnswer1"]:checked').value;
      
      const binaryAnswer = document.querySelector('input[name="binaryAnswer"]:checked').value;
      
      const verbalAnswer = document.getElementById("verbalAnswer").value;
      
      const questionnaireResponses = {
        personalBackground: personalBackground,
        learningAbility: learningAbility,
        commitmentToStudies: commitmentToStudies,
        socialEase: socialEase,
        selfDiscipline: selfDiscipline,
        emotionalResilience: emotionalResilience,
        scaleAnswer: scaleAnswer,
        binaryAnswer: binaryAnswer,
        verbalAnswer: verbalAnswer
      };
      
      console.log(questionnaireResponses);
      alert("תודה על מילוי השאלון!");
 