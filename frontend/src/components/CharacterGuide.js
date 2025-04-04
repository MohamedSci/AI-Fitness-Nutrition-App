import React from 'react';
import './styles/components/CharacterGuide.css';

const CharacterGuide = ({ step }) => {
  const messages = {
    1: "Hi there! Let's start with some basic information about you.",
    2: "Great! Now tell me about your current fitness level.",
    3: "Almost there! What are your fitness goals?",
    4: "Let's review your information before we generate your plan!"
  };

  return (
    <div className={`character-guide step-${step}`}>
      <div className="character-avatar">
        <div className="character-face">
          <div className="character-eyes">
            <div className="character-eye"></div>
            <div className="character-eye"></div>
          </div>
          <div className="character-mouth"></div>
        </div>
      </div>
      <div className="character-message">
        <p>{messages[step]}</p>
      </div>
    </div>
  );
};

export default CharacterGuide;