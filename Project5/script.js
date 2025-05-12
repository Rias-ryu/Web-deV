document.addEventListener("DOMContentLoaded" , () => {
    
const DomesticAnimals = [
  {
    question: "Which animal gives us milk?",
    choices: ["Cow", "Lion", "Elephant", "Tiger"],
    answer: "Cow",
  },
  {
    question: "Which domestic animal barks?",
    choices: ["Cat", "Cow", "Dog", "Goat"],
    answer: "Dog",
  },
//   {
//     question: "Which animal guards our house?",
//     choices: ["Dog", "Horse", "Sheep", "Donkey"],
//     answer: "Dog",
//   },
//   {
//     question: "Which domestic animal gives us wool?",
//     choices: ["Sheep", "Dog", "Cat", "Buffalo"],
//     answer: "Sheep",
//   },
//   {
//     question: "Which animal says 'Meow'?",
//     choices: ["Dog", "Cow", "Cat", "Hen"],
//     answer: "Cat",
//   },
//   {
//     question: "Which animal carries loads?",
//     choices: ["Monkey", "Donkey", "Cow", "Dog"],
//     answer: "Donkey",
//   },
//   {
//     question: "Which animal is used for riding?",
//     choices: ["Cat", "Horse", "Sheep", "Pig"],
//     answer: "Horse",
//   },
//   {
//     question: "Which animal lives in a kennel?",
//     choices: ["Cow", "Dog", "Hen", "Cat"],
//     answer: "Dog",
//   },
//   {
//     question: "Which animal gives us eggs?",
//     choices: ["Hen", "Dog", "Cow", "Goat"],
//     answer: "Hen",
//   },
//   {
//     question: "Which animal says 'Moo'?",
//     choices: ["Dog", "Cow", "Cat", "Sheep"],
//     answer: "Cow",
//   }
];

const FruitQuestions = [
  {
    question: "Which fruit is yellow and long?",
    choices: ["Apple", "Banana", "Grapes", "Orange"],
    answer: "Banana",
  },
  {
    question: "Which fruit is red and keeps the doctor away?",
    choices: ["Apple", "Banana", "Pineapple", "Mango"],
    answer: "Apple",
  },
  {
    question: "Which fruit has many small seeds on its outside?",
    choices: ["Mango", "Strawberry", "Orange", "Guava"],
    answer: "Strawberry",
  },
  {
    question: "Which fruit is round and orange in color?",
    choices: ["Watermelon", "Apple", "Orange", "Pear"],
    answer: "Orange",
  },
  {
    question: "Which fruit has a thick green skin and red inside?",
    choices: ["Kiwi", "Watermelon", "Papaya", "Plum"],
    answer: "Watermelon",
  },
  {
    question: "Which fruit is the king of fruits?",
    choices: ["Banana", "Mango", "Apple", "Grapes"],
    answer: "Mango",
  },
  {
    question: "Which fruit grows in bunches?",
    choices: ["Apple", "Mango", "Grapes", "Orange"],
    answer: "Grapes",
  },
  {
    question: "Which fruit has a crown and is spiky?",
    choices: ["Pineapple", "Papaya", "Orange", "Guava"],
    answer: "Pineapple",
  },
  {
    question: "Which fruit is small, red, and sweet?",
    choices: ["Cherry", "Pineapple", "Peach", "Plum"],
    answer: "Cherry",
  },
  {
    question: "Which fruit is green or red and used in juice?",
    choices: ["Grapes", "Apple", "Orange", "Guava"],
    answer: "Apple",
  }
];

const AnimalSounds = [
  {
    question: "Which animal says 'Meow'?",
    choices: ["Dog", "Cat", "Cow", "Horse"],
    answer: "Cat",
  },
  {
    question: "Which animal says 'Moo'?",
    choices: ["Dog", "Cat", "Cow", "Goat"],
    answer: "Cow",
  },
  {
    question: "Which animal barks?",
    choices: ["Horse", "Goat", "Dog", "Pig"],
    answer: "Dog",
  },
  {
    question: "Which bird says 'Chirp'?",
    choices: ["Parrot", "Sparrow", "Hen", "Crow"],
    answer: "Sparrow",
  },
  {
    question: "Which animal says 'Neigh'?",
    choices: ["Cow", "Goat", "Horse", "Elephant"],
    answer: "Horse",
  },
  {
    question: "Which animal says 'Baa'?",
    choices: ["Goat", "Dog", "Duck", "Sheep"],
    answer: "Sheep",
  },
  {
    question: "Which animal roars?",
    choices: ["Cat", "Lion", "Cow", "Deer"],
    answer: "Lion",
  },
  {
    question: "Which animal says 'Quack'?",
    choices: ["Hen", "Duck", "Dog", "Frog"],
    answer: "Duck",
  },
  {
    question: "Which animal croaks?",
    choices: ["Duck", "Frog", "Dog", "Parrot"],
    answer: "Frog",
  },
  {
    question: "Which animal trumpets?",
    choices: ["Horse", "Dog", "Elephant", "Cat"],
    answer: "Elephant",
  }
];

const BodyParts = [
  {
    question: "Which body part helps us to see?",
    choices: ["Ears", "Eyes", "Nose", "Hands"],
    answer: "Eyes",
  },
  {
    question: "Which body part helps us to hear?",
    choices: ["Eyes", "Mouth", "Ears", "Nose"],
    answer: "Ears",
  },
  {
    question: "Which body part helps us to smell?",
    choices: ["Eyes", "Nose", "Hands", "Feet"],
    answer: "Nose",
  },
  {
    question: "Which body part helps us to walk?",
    choices: ["Hands", "Legs", "Ears", "Teeth"],
    answer: "Legs",
  },
  {
    question: "Which body part helps us to taste food?",
    choices: ["Eyes", "Tongue", "Ears", "Nose"],
    answer: "Tongue",
  },
  {
    question: "Which body part helps us to write?",
    choices: ["Legs", "Hands", "Eyes", "Mouth"],
    answer: "Hands",
  },
  {
    question: "How many fingers do we have on one hand?",
    choices: ["3", "4", "5", "6"],
    answer: "5",
  },
  {
    question: "Which body part helps us to chew food?",
    choices: ["Eyes", "Nose", "Teeth", "Ears"],
    answer: "Teeth",
  },
  {
    question: "What do we use to smell a flower?",
    choices: ["Tongue", "Nose", "Eyes", "Hands"],
    answer: "Nose",
  },
  {
    question: "Which body part pumps blood?",
    choices: ["Lungs", "Heart", "Brain", "Stomach"],
    answer: "Heart",
  }
];

const DaysOftheWeek = [
  {
    question: "What is the first day of the week?",
    choices: ["Sunday", "Monday", "Tuesday", "Saturday"],
    answer: "Sunday",
  },
  {
    question: "Which day comes after Monday?",
    choices: ["Wednesday", "Sunday", "Tuesday", "Thursday"],
    answer: "Tuesday",
  },
  {
    question: "Which day comes before Friday?",
    choices: ["Monday", "Thursday", "Saturday", "Sunday"],
    answer: "Thursday",
  },
  {
    question: "Which is the last day of the week?",
    choices: ["Saturday", "Friday", "Sunday", "Wednesday"],
    answer: "Saturday",
  },
  {
    question: "How many days are there in a week?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which day comes between Tuesday and Thursday?",
    choices: ["Monday", "Wednesday", "Saturday", "Friday"],
    answer: "Wednesday",
  },
  {
    question: "Which days are weekend days?",
    choices: ["Monday and Tuesday", "Friday and Saturday", "Saturday and Sunday", "Wednesday and Thursday"],
    answer: "Saturday and Sunday",
  },
  {
    question: "Which day comes after Friday?",
    choices: ["Saturday", "Sunday", "Monday", "Wednesday"],
    answer: "Saturday",
  },
  {
    question: "Which day comes before Monday?",
    choices: ["Saturday", "Friday", "Sunday", "Tuesday"],
    answer: "Sunday",
  },
  {
    question: "What day comes after Wednesday?",
    choices: ["Monday", "Thursday", "Friday", "Sunday"],
    answer: "Thursday",
  }
];

const startButton = document.getElementById("start-button")
const RestartButton = document.getElementById("restart-button")
const NextButton = document.getElementById("next-button")
const QuestionContainer = document.getElementById("question-container")
const QuestionText = document.getElementById("question-text")
const ChoiceList = document.getElementById("choice-list")
const ResultContainer = document.getElementById("result-container")
const ScoreDisplay = document.getElementById("score")
const categorySelection = document.getElementById("category-selection-container")

let currentQuestionIndex = 0 
let score = 0
let selectedCategory = null;

document.querySelectorAll(".category-button" ).forEach(button => {
    button.addEventListener("click" , (event1) => {
        selectedCategory = event1.target.id
        categorySelection.classList.add("hidden")
        startQuiz()
    })
})

startButton.addEventListener("click" , startQuiz)

function startQuiz(){
    startButton.classList.add("hidden")
    ResultContainer.classList.add("hidden")
    QuestionContainer.classList.remove("hidden")
    showQuestion()
}

function showQuestion(){
    NextButton.classList.add("hidden")
    let currentQuizArray = []
    switch (selectedCategory) {
        case "domestic-animals":
            currentQuizArray = DomesticAnimals;
            break;
        case "fruits":
            currentQuizArray = FruitQuestions;
            break;
        case "animal-sounds" :
            currentQuizArray = AnimalSounds;
            break;
        case "body-parts" :
            currentQuizArray = BodyParts;
            break;
        case "days-of-week" :
            currentQuizArray = DaysOftheWeek;
            break;
    };

    QuestionText.textContent = currentQuizArray[currentQuestionIndex].question
    ChoiceList.innerHTML = ""   // clearnig choices list
    currentQuizArray[currentQuestionIndex].choices.forEach(choice => {
        const li = document.createElement("li")
        li.textContent = choice
        li.classList.add(
  "block",
  "w-full",
  "bg-white",
  "border",
  "border-gray-300",
  "rounded-lg",
  "px-6",
  "py-3",
  "text-gray-800",
  "text-lg",
  "font-medium",
  "shadow-sm",
  "hover:bg-blue-100",
  "hover:border-blue-400",
  "cursor-pointer",
  "transition",
  "duration-200",
  "ease-in-out"
);


        li.addEventListener("click" , () => selectAnswer(choice))
        ChoiceList.appendChild(li)
    })
}

function selectAnswer(choice){
    
    ChoiceList.querySelectorAll("li").forEach(item => item.classList.remove("bg-blue-200"));

    // Highlight the selected choice
    const selectedLi = Array.from(ChoiceList.children).find(li => li.textContent === choice);
    if (selectedLi) {
        selectedLi.classList.add("bg-blue-200");
    }

    const correctAnswer = selectedCategory === 'domestic-animals' ? DomesticAnimals[currentQuestionIndex].answer :
                          selectedCategory === 'fruits' ? FruitQuestions[currentQuestionIndex].answer : 
                          selectedCategory === 'animal-sounds' ? AnimalSounds[currentQuestionIndex].answer : 
                          selectedCategory === 'body-parts' ? BodyParts[currentQuestionIndex].answer : 
                          DaysOftheWeek[currentQuestionIndex].answer;

    
    if (choice === correctAnswer) {
        score++
    }
    NextButton.classList.remove("hidden")
}


NextButton.addEventListener("click" , () => {
    currentQuestionIndex++
    const quizLength = getCurrentLenght();
    if (currentQuestionIndex < quizLength.length) {
        showQuestion()
    }
    else{
        showResult()
    }
})

function getCurrentLenght(){
    switch (selectedCategory) {
            case "domestic-animals":
                return DomesticAnimals;
            case "fruits":
                return FruitQuestions;
            case "animal-sounds":
                return AnimalSounds;
            case "body-parts":
                return BodyParts;
            case "days-of-week":
                return DaysOftheWeek;
            default:
                return [];
        }
}

function showResult(){
    QuestionContainer.classList.add("hidden")
    ResultContainer.classList.remove("hidden")
    const quizLength = getCurrentLenght(); 
    ScoreDisplay.textContent = `${score} you scored out of ${quizLength.length}`
}

RestartButton.addEventListener("click" , () => {
    currentQuestionIndex = 0 
    score = 0
    selectedCategory = null;
    ResultContainer.classList.add("hidden")
    categorySelection.classList.remove("hidden")
    showQuestion.classList.add("hidden")
    startQuiz()
})


})