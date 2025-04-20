import React, { useState } from 'react';
import './App.css';
import questions from './questionData';

function App() {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (questionId, optionIndex) => {
    const question = questions.find(q => q.id === questionId);
    const isCorrect = optionIndex === question.correctAnswer;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: {
        selected: optionIndex,
        isCorrect,
        showFeedback: true
      }
    }));
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      <h1>Food Science Quiz</h1>
      <div className="score">Score: {score}</div>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h3>Question {q.id}:</h3>
            <div dangerouslySetInnerHTML={{ 
              __html: q.question 
            }} />
            <div className="options">
              {q.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswers[q.id]?.selected === index
                      ? selectedAnswers[q.id]?.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswer(q.id, index)}
                  disabled={selectedAnswers[q.id]?.showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedAnswers[q.id]?.showFeedback && (
              <div className={`answer-feedback ${
                selectedAnswers[q.id].isCorrect ? 'correct' : 'incorrect'
              }`}>
                {selectedAnswers[q.id].isCorrect
                  ? 'Correct!'
                  : `Incorrect. The correct answer is: ${q.options[q.correctAnswer]}`}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 