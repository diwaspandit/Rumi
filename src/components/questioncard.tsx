import { useState } from "react";
import { Card } from "./ui/card.tsx";
import { Button } from "./ui/button.tsx";
import { ChevronRight } from "lucide-react";
import { questions } from "./questions";

interface QuestionCardProps {
  initialQuestionNumber: number;
}

export default function QuestionCard({ initialQuestionNumber }: QuestionCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionNumber - 1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const question = questions[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    }
  };

  if (!question) {
    return (
      <Card className="p-10 min-w-80">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-2xl">No question found</h2>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <Card className="p-10 w-96">
        <div className="flex flex-col justify-start text-left">
          <small>Q{question.id}</small>
          <h2 className="font-semibold text-2xl">{question.question}</h2>
          <div className="p-4 flex flex-row flex-wrap justify-center gap-2">
            {question.answerOptions.map((option, index) => (
              <Button
                key={index}
                className={`flex-grow ${
                  selectedAnswer === option ? "bg-blue-400 text-white" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <Button className="self-end" onClick={handleNextClick} disabled={!selectedAnswer}>
            <ChevronRight />
          </Button>
        </div>
      </Card>
    </div>
  );
}
