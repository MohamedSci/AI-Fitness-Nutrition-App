import React from 'react';
import './styles/components/RecommendationCard.css';

const RecommendationCard = ({ title, content, type }) => {
  const renderContent = () => {
    switch (type) {
      case 'level':
        return (
          <div className="level-indicator">
            <div className={`level-circle ${content.toLowerCase()}`}>
              {content.charAt(0)}
            </div>
            <h3>{content}</h3>
          </div>
        );
      
      case 'training':
        return (
          <div>
            <div className="training-summary">
              <p><strong>Frequency:</strong> {content.workout_frequency}</p>
            </div>
            <div className="exercises-list">
              <h4>Exercises:</h4>
              <ul>
                {content.exercises.map((exercise, index) => (
                  <li key={index} className="exercise-item">
                    <span className="exercise-name">{exercise.name}</span>
                    <span className="exercise-details">
                      {exercise.sets} sets × {exercise.repetitions} reps
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'nutrition':
        return (
          <div className="nutrition-plan">
            <div className="calories-display">
              <h3>{content.daily_calories} kcal</h3>
              <p>Daily Caloric Target</p>
            </div>
            <div className="macros-display">
              <div className="macro protein">
                <h4>{content.macronutrient_targets.protein}g</h4>
                <p>Protein</p>
              </div>
              <div className="macro carbs">
                <h4>{content.macronutrient_targets.carbs}g</h4>
                <p>Carbs</p>
              </div>
              <div className="macro fat">
                <h4>{content.macronutrient_targets.fat}g</h4>
                <p>Fat</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return <p>{content}</p>;
    }
  };

  return (
    <div className={`recommendation-card ${type}`}>
      <h3>{title}</h3>
      {renderContent()}
    </div>
  );
};

export default RecommendationCard;