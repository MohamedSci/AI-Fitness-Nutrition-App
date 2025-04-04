import React from 'react';
import '../styles/components/ProgressBar.css';

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="progress-container">
      <div className="progress-labels">
        {[...Array(totalSteps)].map((_, i) => (
          <div 
            key={i} 
            className={`progress-step ${i + 1 === step ? 'active' : ''} ${i + 1 < step ? 'completed' : ''}`}
          >
            Step {i + 1}
          </div>
        ))}
      </div>
      <div className="progress-bar-background">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;