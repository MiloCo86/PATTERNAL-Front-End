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

console.log(getCheckInQuestions(1));
console.log(getCheckInQuestions(2));
console.log(getCheckInQuestions(3));
console.log(getCheckInQuestions(4));
console.log(getCheckInQuestions(5));
console.log(getCheckInQuestions(6));

export default getCheckInQuestions;