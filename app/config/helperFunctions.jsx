import dailyCheckInQuestions from "../assets/checkin_questions_data/checkin_questions";

//function that gets an array of mood questions and returns 3 random questions, 1 mood question and 2 parenting questions

function getCheckInQuestions (mood) {
    let filteredQuestions = dailyCheckInQuestions.filter(question => question.mood === mood);
    if (filteredQuestions.length > 0) {
        // questions Id will be an string, the first number will be the mood, 
        // the second number will be 1 for mood question and 2 for parenting question,
        // the third number will be the question index in 2 digits format

        let questionId1 = `${mood}1`;
        let questionId2 = `${mood}2`;
        let questionId3 = `${mood}2`;

        let moodQuestions = filteredQuestions[0].moodQuestions;
        let parentingQuestions = filteredQuestions[0].parentingQuestions;

        const randomIndex1 = Math.floor(Math.random() * moodQuestions.length);
        const randomIndex2 = Math.floor(Math.random() * parentingQuestions.length);
        let randomIndex3 = Math.floor(Math.random() * parentingQuestions.length);
        if (randomIndex3 === randomIndex2) {
            randomIndex3 = (randomIndex3 + 1) % parentingQuestions.length;
        }


        let randomMoodQuestion = moodQuestions[randomIndex1];
        let randomParentingQuestion1 = parentingQuestions[randomIndex2];
        let randomParentingQuestion2 = parentingQuestions[randomIndex3];

        return [
            {questionNum: 1, questionId: questionId1, text: randomMoodQuestion},
            {questionNum: 2, questionId: questionId2, text: randomParentingQuestion1},
            {questionNum: 3, questionId: questionId3, text: randomParentingQuestion2}
        ];
    } else {
        return { error: "The mood provided does not exist." };        
    }
}


const getMoodValueWeekly = (moodsArray) => {
  const moodCounter = {
    overwhelmed: 0,
    stressed: 0,
    neutral: 0,
    content: 0,
    peaceful: 0,
  };

 for(mood of moodsArray){ 
    if(mood === 1){
      moodCounter.overwhelmed += 1;
    }else if(mood === 2){
      moodCounter.stressed += 1;
    }else if(mood === 3){
      moodCounter.neutral += 1;
    }else if(mood === 4){
      moodCounter.content += 1;
    }else if(mood === 5){
      moodCounter.peaceful += 1;
    }
  }

  return moodCounter;
}  



const getQuestionById = (questionId) => {
    let mood = questionId[0];
    let questionNum = questionId[1];
    let questionIndex = questionId.slice(2);
    let filteredQuestions = dailyCheckInQuestions.filter(question => question.mood === parseInt(mood));
    if (filteredQuestions.length > 0) {
        if (questionNum === '1') {
            return filteredQuestions[0].moodQuestions[parseInt(questionIndex)];
        } else if (questionNum === '2') {
            return filteredQuestions[0].parentingQuestions[parseInt(questionIndex)];
        } else {
            return { error: "The question number provided does not exist." };
        }
    } else {
        return { error: "The mood provided does not exist." };
    }
}

export {getCheckInQuestions, getMoodValueWeekly, getQuestionById};

