const dailyCheckInQuestions =[
    {
        mood: 1, //1 = overwhelmed
        moodQuestions: [
            "Does this feeling seem worse than usual?",
            "Do you feel like you're in control of your emotions?",
            "Have you felt this way for more than 1 week?",
            "Do you have someone you can reach out to for support?",
            "Have you been able to sleep well?",
            "Do you feel like you're able to concentrate?",
            "Do you feel like you're able to make decisions?"
        ],
        parentingQuestions: [
            "Are your emotions affecting your ability to be present with your family today?",
            "Are daily parenting tasks feeling harder than usual?",
            "Could sharing with your partner or family member help you feel better?",
            "Are you able to be patient with your child today?",
            "Do you need to adjust your expectations for today?",
            "Do you need to adjust your family commitments today?"
        ]
    },
    {
        mood: 2, //2 = stressed
        moodQuestions: [
            "Is your stress related to specific events or tasks?",
            "Are you able to identify the source of your stress?",
            "Are you able to take breaks when you need them?",
            "Are you able to ask for help when you need it?",
            "Would alone time help reduce your stress?",
            "Could delegating tasks help reduce your stress?"
        ],
        parentingQuestions: [
            "Is your stress affecting your interactions with your kids?",
            "Are you able to be patient with your family today?",
            "Are family responsibilities adding to your stress level today?",
            "Do you feel supported in your parenting today?",
            "Have you effectively communicated your needs to your family today?",
            "Do you need to adjust your at home expectations for today?"
        ]
    },
    {
        mood: 3, //3 = neutral
        moodQuestions: [
            "Are you feeling more positive than yesterday?",
            "Do you feel well rested today?",
            "Are you able to concentrate on your tasks today?",
            "Are you interested in doing something enjoyable today?",
            "Are you able to make efficient decisions today?",
            "Is your problem solving ability better than usual today?"
        ],
        parentingQuestions: [
            "Do you feel ready to engage in family activities?",
            "Have you had any positive moments with your kids today?",
            "Are you satisfied with your family interactions today?",
            "Do regular parenting challenges seem easier today than usual?",
            "Have you been intentional about spending time with your kids today?",
            "Do you feel like you're able to be present with your family today?"
        ]
    },
    {
        mood: 4, //4 =  content
        moodQuestions: [
            "Did something specific make you feel content today?",
            "Are you able to identify the source of your happiness?",
            "Do you feel more relaxed than usual?",
            "Are you able to enjoy the present moment?",
            "Are you looking forward to the rest of your day?",
            "Are you able to appreciate the small things today?",
        ],
        parentingQuestions: [
            "Have you shared positive moments with your family today?",
            "Do you feel confident in your parenting right now?",
            "Are you enjoying family time more than usual?",
            "Do you feel like a good role model today?",
            "Do you feel like you're rising to the occasion as a parent?",
            "Will you be able to maintain your positive mood for the rest of the day?",
            "Have you exercised today?",
        ]
    },
    {
        mood: 5, //5 = peaceful
        moodQuestions: [
            "Did you do something specific to achieve this peaceful state?",
            "Are you able to maintain this peaceful state?",
            "Have you expressed gratitude for anything specific today?",
            "Do you feel more patient than usual?",
            "Have tou been able to maintain a positive outlook lately?",
            "Are you able to appreciate the present moment?",
            "Have you meditated today?",
            "Have you practiced mindfulness today?"
        ],
        parentingQuestions: [
            "Are you able to maintain a peaceful demeanor with your family today?",
            "Have you been patient with your kids today?",
            "Is your calm mood positively affecting your family?",
            "Do you feel especially connected with your children today?",
            "Are everyday parenting tasks feeling easier?",
            "Have you created any special family moments today?"
        ]
    }

];

export default dailyCheckInQuestions;