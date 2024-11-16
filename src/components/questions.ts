// Define the Question type
export interface Question {
  id: number;
  question: string;
  answerOptions: ["True", "False"];
}
  
  // Define the questions array
  export const questions: Question[] = [
    // Lifestyle Preferences
    {
      id: 1,
      question: "Do you smoke?",
      answerOptions: ["True", "False"]
    },
    {
      id: 2,
      question: "Do you mind having a roommate who smokes?",
      answerOptions: ["True", "False"]
    },
    {
      id: 3,
      question: "Do you drink alcohol?",
      answerOptions: ["True", "False"]
    },
    {
      id: 4,
      question: "Are you okay with a roommate who drinks alcohol?",
      answerOptions: ["True", "False"]
    },
    {
      id: 5,
      question: "Do you have any pets?",
      answerOptions: ["True", "False"]
    },
    {
      id: 6,
      question: "Are you okay with a roommate having pets?",
      answerOptions: ["True", "False"]
    },
    {
      id: 7,
      question: "Do you follow a vegetarian or vegan diet?",
      answerOptions: ["True", "False"]
    },
    {
      id: 8,
      question: "Do you prefer a roommate who follows the same diet?",
      answerOptions: ["True", "False"]
    },
    {
      id: 9,
      question: "Do you often have guests over?",
      answerOptions: ["True", "False"]
    },
    {
      id: 10,
      question: "Are you okay with your roommate having frequent guests?",
      answerOptions: ["True", "False"]
    },
    
    // Cleaning and Organization
    {
      id: 11,
      question: "Do you consider yourself a clean person?",
      answerOptions: ["True", "False"]
    },
    {
      id: 12,
      question: "Do you expect your roommate to be clean and organized?",
      answerOptions: ["True", "False"]
    },
    {
      id: 13,
      question: "Do you follow a specific cleaning schedule?",
      answerOptions: ["True", "False"]
    },
    {
      id: 14,
      question: "Are you okay with sharing household chores?",
      answerOptions: ["True", "False"]
    },
    
    // Noise and Privacy
    {
      id: 15,
      question: "Do you stay up late often?",
      answerOptions: ["True", "False"]
    },
    {
      id: 16,
      question: "Do you wake up early?",
      answerOptions: ["True", "False"]
    },
    {
      id: 17,
      question: "Do you prefer a quiet environment?",
      answerOptions: ["True", "False"]
    },
    {
      id: 18,
      question: "Are you okay with playing music or TV at a moderate volume?",
      answerOptions: ["True", "False"]
    },
    {
      id: 19,
      question: "Do you work or study from home?",
      answerOptions: ["True", "False"]
    },
    {
      id: 20,
      question: "Are you okay with your roommate working or studying from home?",
      answerOptions: ["True", "False"]
    },
    
    // Financial and Sharing
    {
      id: 21,
      question: "Are you comfortable sharing groceries?",
      answerOptions: ["True", "False"]
    },
    {
      id: 22,
      question: "Are you comfortable sharing household items (e.g., cleaning supplies, kitchen utensils)?",
      answerOptions: ["True", "False"]
    },
    {
      id: 23,
      question: "Are you okay with splitting utilities and other expenses equally?",
      answerOptions: ["True", "False"]
    },
    {
      id: 24,
      question: "Do you have a fixed monthly budget for rent and utilities?",
      answerOptions: ["True", "False"]
    },
    
    // Hobbies and Social Life
    {
      id: 25,
      question: "Do you enjoy socializing with your roommate?",
      answerOptions: ["True", "False"]
    },
    {
      id: 26,
      question: "Are you okay with living with someone who hosts parties occasionally?",
      answerOptions: ["True", "False"]
    },
    {
      id: 27,
      question: "Do you prefer a roommate who shares similar hobbies?",
      answerOptions: ["True", "False"]
    },
    {
      id: 28,
      question: "Do you spend most of your time outside the home?",
      answerOptions: ["True", "False"]
    }
  ];
  