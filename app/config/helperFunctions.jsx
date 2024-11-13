import dailyCheckInQuestions from "../assets/checkin_questions_data/checkin_questions";

//function that gets an array of mood questions and returns 3 random questions, 1 mood question and 2 parenting questions

function getCheckInQuestions(mood) {
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
      { questionNum: 1, questionId: questionId1, text: randomMoodQuestion },
      { questionNum: 2, questionId: questionId2, text: randomParentingQuestion1 },
      { questionNum: 3, questionId: questionId3, text: randomParentingQuestion2 }
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

  for (mood of moodsArray) {
    if (mood === 1) {
      moodCounter.overwhelmed += 1;
    } else if (mood === 2) {
      moodCounter.stressed += 1;
    } else if (mood === 3) {
      moodCounter.neutral += 1;
    } else if (mood === 4) {
      moodCounter.content += 1;
    } else if (mood === 5) {
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

const convertDateToMonthDayFormat = (date) => {
  //date is in the format yyyy-mm-dd
  //return date will be in format Month dd
  const dateArray = date.split("-");
  const month = dateArray[1];
  const day = dateArray[2];
  let monthStr = "";
  let dayStr = "";

  switch (month) {
    case "01":
      monthStr = "Jan";
      break;
    case "02":
      monthStr = "Feb";
      break;
    case "03":
      monthStr = "Mar";
      break;
    case "04":
      monthStr = "Apr";
      break;
    case "05":
      monthStr = "May";
      break;
    case "06":
      monthStr = "Jun";
      break;
    case "07":
      monthStr = "Jul";
      break;
    case "08":
      monthStr = "Aug";
      break;
    case "09":
      monthStr = "Sep";
      break;
    case "10":
      monthStr = "Oct";
      break;
    case "11":
      monthStr = "Nov";
      break;
    case "12":
      monthStr = "Dec";
      break;
  }

  switch (dayStr) {
    case "01":
      dayStr = "1st";
      break;
    case "02":
      dayStr = "2nd";
      break;
    case "03":
      dayStr = "3rd";
      break;
    case "21":
      dayStr = "21st";
      break;
    case "22":
      dayStr = "22nd";
      break;
    case "23":
      dayStr = "23rd";
      break;
    case "31":
      dayStr = "31st";
      break;
    default:
      dayStr = `${day}th`;
  }

  return `${monthStr} ${dayStr}`;

}

const timeSelector = (durationArray, timeInSeconds) => {
  return durationArray[Math.abs(timeInSeconds) % 6];
}

const countDownTimerHeader = (seconds) => {
  return seconds >= 120 ? "Minutes" : (seconds < 120 && seconds >= 60) ? "Minute" : seconds === 1 ? "Second" : "Seconds";
}

const countDownTimerDisplay = (seconds) => {
  return `${Math.floor(seconds / 60)} : ${(seconds % 60) < 10 ? "0" + String(seconds % 60) : seconds % 60}`;
}

//function that gets an array of mood entries and returns the mood values of the past week
function getPastWeekMoods(entries, currentDate) {
  const currentDateObj = new Date(currentDate);
  const oneWeekAgo = new Date(currentDateObj);
  oneWeekAgo.setDate(currentDateObj.getDate() - 7);

  return entries
      .filter(entry => {
          const entryDate = new Date(entry.created_at);
          return entryDate >= oneWeekAgo && entryDate <= currentDateObj;
      })
      .map(entry => entry.mood);
}

const getChatResponse = (message,user) => {
  const msg = message.toLowerCase();

  if (msg.trim() === "hi" || msg.trim() === "hello" || msg.trim() === "hey" || msg.trim() === "hi!" || msg.trim() === "hello!" || msg.trim() === "hey!") {

    // return a random greeting
    const greetings = [`Hello ${user}! How can I help you today?`, `Hi ${user}! What can I do for you today?`, `Hey ${user}! How can I assist you today?`];
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
    
  }

  if (msg.includes("how are you") || msg.includes("how are you doing") || msg.includes("how are you today")) {
    return "I am just a computer program, I don't have feelings. But I am here to help you!";
  }

  if (msg.includes("what is your name") || msg.includes("what's your name")) {
    return "My name is Patt!!";
  }

  if (msg.includes('toy') && msg.includes('hit')) {

    return 'Seeing your son mirror your reactions with throwing and yelling is tough, but your awareness is the first step to change. Take a moment in another room, take three deep breaths, then return. When you slip up, model honest repair: Remember - kids learn more from how we repair than from our perfect moments.'
  
  }

  if (msg.includes('better') && msg.includes('example')) {

    return "I know it's not easy, but the fact that you're so committed to doing better is really admirable. You're a great dad, and your kids are lucky to have you make this a priority. With time and practice, these new skills will become habits. I'm here to support you every step of the way."

  }

  return "I'm sorry, I don't understand that. Can you please rephrase it?";


}


export { getCheckInQuestions, getMoodValueWeekly, getQuestionById, convertDateToMonthDayFormat, timeSelector, countDownTimerHeader, countDownTimerDisplay, getPastWeekMoods, getChatResponse };

