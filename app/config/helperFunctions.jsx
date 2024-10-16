import dailyCheckInQuestions from "../assets/checkin_questions_data/checkin_questions";

//function that gets an array of mood questions and returns 3 random questions, 1 mood question and 2 parenting questions

const getCheckInQuestions = (mood) => {
    let filteredQuestions = dailyCheckInQuestions.filter(question => question.mood === mood);
    if (filteredQuestions.length > 0) {
        let moodQuestions = filteredQuestions[0].moodQuestions;
        let parentingQuestions = filteredQuestions[0].parentingQuestions;

        let randomMoodQuestion = moodQuestions[Math.floor(Math.random() * moodQuestions.length)];
        let randomParentingQuestion1 = parentingQuestions[Math.floor(Math.random() * parentingQuestions.length)];
        let randomParentingQuestion2 = parentingQuestions[Math.floor(Math.random() * parentingQuestions.length)];

        return [mood, randomMoodQuestion, randomParentingQuestion1, randomParentingQuestion2];
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


export {getCheckInQuestions, getMoodValueWeekly};